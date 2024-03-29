# Vue2源码解析

说起vue原理，就会提到`Object.definePropery()`，也因为它，vue`不支持IE9以下`

## 数据劫持

`v-model`是个神奇的东东，实现了数据双向绑定，那是通过啥实现的，看看源码

- node_modules/vue/src/core/observer/index.js

```js
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
        if (Array.isArray(value)) {
          dependArray(value)
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
```

回顾下，这个东东本身作用就是改写Object的哟，get/set，顾名思义，查询/改写对象咯，也就是vue用到的数据劫持
`get`的时候`dep.depend()`建立对应关系
`set`的时候`dep.notify()`通知模版更新

## 观察者-订阅者模式

`observer`（观察者），当`set`变化了，可以理解为数据更新了，就要通过`dep`去通知`watcher`（订阅者），然后就要通知模版更新咯。


## 虚拟DOM

`MVVM`模式，通过操作数据（model变化），更新虚拟DOM（view-model），通过模版编译实现页面更新(view)，无需操作DOM

## 模版编译

建立vue实例时，一边`observer`变量，一边通过`compile`解析`template`，生成和`DOM`结构对应的`vnode`树，这个`vnode`上的变量都会初始化一个`watcher`，并增加`dep`(`addDep()`),那`dep`就作为桥梁，当`dep.notify()`的时候，`watcher`就会通知`vnode`要更新了（`watcher.update()`）

用一个微信中的例子
关注了一个公众号（有了`dep`），公众号发新消息的时候(`dep.notify()`)，就会看到一条新消息（`watcher.update()`）

![示意图](./new_Vue.png)

# Vuex的小秘密

- node_modules/vuex/dist/vuex.js，行数不多，慢慢看也花不了多久

判断vue版本，嗯，找对爸爸

```js
  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  }
```

接下去是this.$store的来历了，最最朴素的用法`this.$store.state.xxx`

```js
  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
```

忽略一堆vuex的内部实现方法，看到了`resetStoreVM`

```js
  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);
```
看来要去看看这个方法，继续，忽然看到了熟悉的警告，vuex的单向数据流知道咋来了吧，set方法被改了哟～所以想直接修改是不行滴！！！

```js
var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};
```

继续看`resetStoreVM`

```js
function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}
```

得出结论，Vuex 的 `state` 是借助 Vue 的响应式 data 实现的
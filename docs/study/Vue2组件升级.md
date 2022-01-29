# Vue2组件升级

对 IE11 的支持：Vue 3 已经官方放弃对 IE11 的支持。如果仍然需要支持 IE11 或更低版本，那你仍需继续使用 Vue 2。

[官方迁移方案](https://v3.cn.vuejs.org/guide/migration/migration-build.html)

整理出几个常用的<Badge type="danger" text="非兼容" vertical="middle" />API

- v-model
- v-if 与 v-for 的优先级对比
- v-bind 合并行为

## v-model

- 非兼容：用于自定义组件时，v-model prop 和事件默认名称已更改：
  - prop：value -> modelValue；
  - 事件：input -> update:modelValue；


### 2.x 语法

在 2.x 中，在组件上使用 v-model 相当于绑定 value prop 并触发 input 事件：

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :value="pageTitle" @input="pageTitle = $event" />
```

### 3.x 语法

在 3.x 中，自定义组件上的 v-model 相当于传递了 modelValue prop 并接收抛出的 update:modelValue 事件：

```html
<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :modelValue="pageTitle" @update:modelValue="pageTitle = $event" />
```

### v-model 参数

若需要更改 model 的名称，现在我们可以为 v-model 传递一个参数，以作为组件内 model 选项的替代：

```html
<ChildComponent v-model:title="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```

![v-model](./v-model.png)

### v-model 修饰符

除了像 .trim 这样的 2.x 硬编码的 v-model 修饰符外，现在 3.x 还支持自定义修饰符：

```html
<ChildComponent v-model.capitalize="pageTitle" />
```

处理 v-model 修饰符

添加到组件 v-model 的修饰符将通过 modelModifiers prop 提供给组件。在下面的示例中，我们创建了一个组件，其中包含默认为空对象的 modelModifiers prop。

请注意，当组件的 created 生命周期钩子触发时，modelModifiers prop 会包含 capitalize，且其值为 true——因为 capitalize 被设置在了写为 v-model.capitalize="myText" 的 v-model 绑定上。

### Demo

创建一个示例自定义修饰符 capitalize，它将 v-model 绑定提供的字符串的第一个字母大写。

<ClientOnly>
  <myComponent v-model.capitalize="myText" />
  {{myText}}
</ClientOnly>

<script>
  export default {
    data () {
      return {
        myText: ''
      }
    }
  }
</script>

```html
<myComponent v-model.capitalize="myText" />
{{myText}}
```

```js
export default {
  data () {
    return {
      myText: ''
    }
  }
}
```


::: details myComponent.vue

@[code vue](@src/components/my-component/my-component.vue)

:::


对于带参数的 v-model 绑定，生成的 prop 名称将为 arg + "Modifiers"：

```html
<my-component v-model:description.capitalize="myText"></my-component>
```

```js
app.component('my-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: `
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  `,
  created() {
    console.log(this.descriptionModifiers) // { capitalize: true }
  }
})
```

### 迁移策略

- 检查你的代码库中所有使用 .sync 的部分并将其替换为 v-model：

```html
<ChildComponent :title.sync="pageTitle" />

<!-- 替换为 -->

<ChildComponent v-model:title="pageTitle" />
```

- 对于所有不带参数的 v-model，请确保分别将 prop 和 event 命名更改为 modelValue 和 update:modelValue

```html
<ChildComponent v-model="pageTitle" />
```

```js
// ChildComponent.vue

export default {
  props: {
    modelValue: String // 以前是`value：String`
  },
  emits: ['update:modelValue'],
  methods: {
    changePageTitle (title) {
      this.$emit('update:modelValue', title) // 以前是 `this.$emit('input', title)`
    }
  }
}
```

## v-if 与 v-for 的优先级对比

- 非兼容：两者作用于同一个元素上时，v-if 会拥有比 v-for 更高的优先级

### 2.x 语法

2.x 版本中在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。

### 3.x 语法

3.x 版本中 v-if 总是优先于 v-for 生效。

## v-bind 合并行为

- 不兼容：v-bind 的绑定顺序会影响渲染结果。

在一个元素上动态绑定 attribute 时，同时使用 v-bind="object" 语法和独立 attribute 是常见的场景。然而，这就引出了关于合并的优先级的问题。

### 2.x 语法

在 2.x 中，如果一个元素同时定义了 v-bind="object" 和一个相同的独立 attribute，那么这个独立 attribute 总是会覆盖 object 中的绑定。

```html
<!-- 模板 -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- 结果 -->
<div id="red"></div>
```

### 3.x 语法

在 3.x 中，如果一个元素同时定义了 v-bind="object" 和一个相同的独立 attribute，那么绑定的声明顺序将决定它们如何被合并。换句话说，相对于假设开发者总是希望独立 attribute 覆盖 object 中定义的内容，现在开发者能够对自己所希望的合并行为做更好的控制。

```html
<!-- 模板 -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- 结果 -->
<div id="blue"></div>

<!-- 模板 -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- 结果 -->
<div id="red"></div>
```

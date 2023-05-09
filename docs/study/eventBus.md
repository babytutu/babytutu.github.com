<script setup lang="ts">
import inputDom from './my-component/input.vue'
import outputDom from './my-component/output.vue'
</script>


# Vue3 eventBus替代方案

vue3去掉了vue2中的Events API，vm.$on,vm.$off,vm.$once

## 官方推荐

使用`mitt`或者`tiny-emitter`包，可以在安装依赖包后使用

```js
// eventBus.js
import emitter from 'tiny-emitter/instance'

export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
}
```

## 简单方案

```js
// eventBus.js
// eventbus简易替代方案
const mitt = (all) => {
  all = all || new Map()
  return {
    all: all,
    on: function (type, handler) {
      const handlers = all.get(type)
      if (handlers) {
        handlers.push(handler)
      } else {
        all.set(type, [handler])
      }
    },
    off: function (type, handler) {
      const handlers = all.get(type)
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1)
        } else {
          all.set(type, [])
        }
      }
    },
    emit: function (type, evt) {
      let handlers = all.get(type)
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(evt)
        })
      }
      handlers = all.get('*')
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(type, evt)
        })
      }
    },
  }
}

const emitter = mitt()

export default {
  $on: (...args) => emitter.on(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
  all: emitter.all
}
```


## 示例

实际使用时，引入`eventBus.js`即可

### 输入

<ClientOnly>
  <inputDom />
</ClientOnly>

::: details input.vue

```vue
<template>
  <input type="text" v-model="test" @input="change" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import eventBus from './eventBus'

const test = ref('')

const change = () => {
  eventBus.$emit('change', test.value)
}
</script>
<style lang="stylus" scoped>
input {
  padding 10px 15px
  margin-right: 10px
  display: inline
  line-height 1.2
  color #409eff
  border 1px solid #eee
}
</style>
```
:::

### 同步输出

<ClientOnly>
  <outputDom />
</ClientOnly>

::: details output.vue

```vue
<template>
  输入值：{{ test }}
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import eventBus from './eventBus'

const test = ref('abc')

onMounted(() => {
  eventBus.$on('change', (val) => {
    test.value = val
  })
})

onUnmounted(() => {
  eventBus.$off('change')
})
</script>
```

:::
<template>
  <div>
    <input type="text" v-model="text" />
    <p>AES加密：{{encrypt(text)}}</p>
    <p>AES解密：{{decrypt(encrypt(text))}}</p>
  </div>
</template>
<script>
import { encrypt, decrypt } from './cryptojs.js' // 加密解密方法

export default {
  data () {
    return {
      text: 'Message'
    }
  },
  methods: {
    encrypt,
    decrypt,
  }
}
</script>

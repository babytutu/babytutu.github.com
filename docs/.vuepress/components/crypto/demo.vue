<template>
  <input type="text" v-model="text">
  <p>SHA256加密: {{getHash()}}</p>
  <p>AES加密：{{getAES()}}</p>
  <p>AES解密：{{getText()}}</p>
</template>
<script>
import CryptoJS from 'crypto-js'
export default {
  name: 'crypto',
  data () {
    return {
      key: '123',
      text: 'Message',
    }
  },
  methods: {
    /**
     * SHA256加密
     */
    getHash () {
      var hash = CryptoJS.SHA256(this.text)
      return this.text ? hash.toString(CryptoJS.enc.Hex) : ''
    },
    /**
     * AES加密
     */
    getAES () {
      return CryptoJS.AES.encrypt(this.text, this.key).toString()
    },
    /**
     * AES解密
     */
    getText () {
      return  CryptoJS.AES.decrypt(this.getAES(), this.key).toString(CryptoJS.enc.Utf8)
    }
  },
}
</script>

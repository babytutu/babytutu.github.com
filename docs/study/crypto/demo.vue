<template>
  <input type="text" v-model="text" />
  <p>AES加密：{{encrypt(text)}}</p>
  <p>AES解密：{{decrypt(encrypt(text))}}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { encrypt, decrypt } from './cryptojs' // 加密解密方法

const text = ref('Message')
</script>

/**
 * @see https://cryptojs.gitbook.io/docs/
 */
 const CryptoJS = require('crypto-js')

 var text = 'Message'
 var key = 'xxxxxx'

 var encrypted = CryptoJS.AES.encrypt(text, key).toString()
 var decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)

 console.log('text', text)
 console.log('key', key)
 console.log('AES-encrypted', encrypted)
 console.log('AES-decrypted', decrypted)
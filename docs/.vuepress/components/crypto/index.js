/**
 * @see https://cryptojs.gitbook.io/docs/
 */
 const CryptoJS = require('crypto-js')

 var text = 'Message'
 var key = '123'

 var hash = CryptoJS.SHA256(text)

 var encrypted = CryptoJS.AES.encrypt(text, key).toString()
 var decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8)

 console.log('text', text)
 console.log('key', key)
 console.log('SHA256', hash.toString(CryptoJS.enc.Hex))
 console.log('AES-encrypted', encrypted)
 console.log('AES-decrypted', decrypted)
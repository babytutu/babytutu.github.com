/**
 * @see https://cryptojs.gitbook.io/docs/
 */
import CryptoJS from 'crypto-js'

// AES秘钥，与后端约定保持一致
const keyWords = 'xxxxxx'

// 加密方法，登录和修改密码使用
export const encrypt = (pwd) => CryptoJS.AES.encrypt(pwd, keyWords).toString()

// 解密方法，验证旧密码使用
export const decrypt = (pwd) => CryptoJS.AES.decrypt(pwd, keyWords).toString(CryptoJS.enc.Utf8)

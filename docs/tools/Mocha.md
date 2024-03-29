# Mocha

>（发音"摩卡"）诞生于2011年，是现在最流行的JavaScript测试框架之一，在浏览器和Node环境都可以使用。

[Mocha](https://mochajs.org/)

## Install

```bash
npm install --D mocha
```

## Usage

```bash
mkdir test
```

add.test.js
```js
const assert = require('assert')

function add(x, y) {
  return x + y
}

describe('add', () => {
  it('1+1=2', () => {
    assert.equal(add(1, 1), 2)
  })
})
```

package.json
```json
 "script": {
   "test": "mocha"
 }
```


## Watch

package.json
```json
 "script": {
   "watch": "mocha -w",
 }
```

## Report

package.json
```json
 "script": {
    "report": "mocha -R doc > test.html && mocha -R markdown > test.md"
 }
```
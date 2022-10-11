/**
 * 前端水印生成工具类
 * 支持自定义水印内容和位置
 */
let id = '' // 水印id
let watermarkTimer = null // 水印定时器

/**
 * 删除水印
 * 路由切换时，从需要水印页面到不需水印页面，需要删除水印并停止存在的水印定时器
 */
export const removeWatermark = () => {
  if (id && document.getElementById(id)) {
    document.body.removeChild(document.getElementById(id))
  }
  id = ''
  watermarkTimer && clearInterval(watermarkTimer)
  watermarkTimer = null
}

/**
 * 生成水印
 * @param {String} text 水印内容
 * @param {String} top 距离顶部位置
 * @param {String} left 距离左侧位置
 * @param {Number} width 签名宽度
 * @param {Number} height 签名高度
 * @returns 返回水印id
 */
const setWatermarkDIV = (text, top, left, width, height) => {
  removeWatermark()

  id = Math.random() * 10000 + '-' + Math.random() * 10000 + '/' + Math.random() * 10000

  const can = document.createElement('canvas')
  can.width = width
  can.height = height

  const cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180)
  cans.font = '15px Vedana'
  cans.fillStyle = 'rgba(0, 0, 0, .2)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(text, can.width / 20, can.height)

  const waterDiv = document.createElement('div')
  waterDiv.id = id
  waterDiv.style.pointerEvents = 'none'
  waterDiv.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  waterDiv.style.position = 'fixed'
  waterDiv.style.zIndex = '100000'
  waterDiv.style.width = '100%'
  waterDiv.style.height = '100%'
  waterDiv.style.top = top
  waterDiv.style.left = left
  document.body.appendChild(waterDiv)
}

/**
 * 设置水印，定时器2秒1次，删除后仍会自动生成
 * @param {String} text 水印内容
 * @param {String} top 距离顶部位置，默认0px
 * @param {String} left 距离左侧位置， 默认0px
 * @param {Number} width 签名宽度，默认200
 * @param {Number} height 签名高度，默认200
 */
export const setWatermark = (text, top = '0px', left = '0px', width = 200, height = 200) => {
  setWatermarkDIV(text, top, left, width, height)
  watermarkTimer = setInterval(() => {
    if (!document.getElementById(id)) {
      setWatermarkDIV(text, top, left, width, height)
    }
  }, 2000)
}

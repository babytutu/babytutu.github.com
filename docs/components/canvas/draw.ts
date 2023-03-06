
/**
 * 定制canvas画笔
 */
import { withBase } from 'vitepress'

export const Draw = class {
  type: string
  width: number
  height: number
  arr: Array<any>
  action: string
  canvasObj: any

  constructor() {
    this.type = 'stroke' // fill 填充
    this.width = 0
    this.height = 0
    this.arr = [] // 操作记录
    this.action = 'pen'
    this.canvasObj = null
  }

  /**
   * 根据id初始化canvas
   * @param {string} id canvas的id
   * @param {string} color 画笔颜色
   * @param {number} lineWidth 画笔粗细
   */
  initCanvas (id, color, lineWidth) {
    const dom: any = document.getElementById(id)
    this.canvasObj = dom.getContext('2d', {
      willReadFrequently: true
    })
    this.width = this.canvasObj.canvas.width
    this.height = this.canvasObj.canvas.height

    if (color && lineWidth) {
      this.changeStyle({ color, lineWidth })
      dom.onmousedown = (e) => {
        // 只监听左键点击
        if (e.button !== 0) {
          return
        }
        const x = e.offsetX
        const y = e.offsetY
        this.canvasObj.beginPath()
        this.canvasObj.moveTo(e.offsetX, e.offsetY)
        dom.onmousemove = (e) => {
          // 铅笔和橡皮时时更新
          if (['pen', 'eraser'].includes(this.action)) {
            this[this.action](e.offsetX, e.offsetY)
          }
          dom.style.cursor = `url(${withBase('/ico/pen.ico')}), pointer`
        }
        document.onmouseup = (e) => {
          // 矩形/圆形/直线/多边形只根据起始和结束节点绘制
          if (['rect', 'circle', 'line', 'poly'].includes(this.action)) {
            this[this.action](x, y, e.offsetX, e.offsetY)
          }
          dom.onmousemove = null
          document.onmouseup = null
          // 保存每一次操作
          this.saveStep()
        }
      }
    }
  }

  /**
   * 更新画笔属性
   * @param {string} color 画笔颜色
   * @param {number} lineWidth 画笔粗细
   * @param {string} action 画笔类型
   */
  changeStyle ({ color, lineWidth, action = this.action }) {
    this.canvasObj.strokeStyle = color
    this.canvasObj.fillStyle = color
    this.canvasObj.lineWidth = lineWidth
    this.action = action
  }

  /**
   * 画笔动作
   * @param {number} x 画笔位置x
   * @param {number} y 画笔位置y
   */
  pen (x, y) {
    this.canvasObj.save()
    this.canvasObj.lineCap = 'round'
    this.canvasObj.lineTo(x, y)
    this.canvasObj.stroke()
    this.canvasObj.restore()
  }

  /**
   * 橡皮擦
   * @param {number} x 橡皮擦x
   * @param {number} y 橡皮擦y
   */
  eraser (x, y) {
    this.canvasObj.lineCap = 'round'
    this.canvasObj.clearRect(x - 5, y - 5, 20, 20)
  }

  /**
   * 调整填充类型
   * @param {string} type 类型，填充/框线
   */
  changeType (type) {
    this.type = type
  }

  /**
   * 矩形
   * @param {number} x 开始x
   * @param {number} y 开始y
   * @param {number} x1 结束x
   * @param {number} y1 结束y
   */
  rect (x, y, x1, y1) {
    this.canvasObj.beginPath()
    this.canvasObj.rect(x, y, x1 - x, y1 - y)
    if (this.type == 'stroke') {
      this.canvasObj.stroke()
    } else if (this.type == 'fill') {
      this.canvasObj.fill()
    }
    this.canvasObj.restore()
  }

  /**
   * 圆形
   * @param {number} x 开始x
   * @param {number} y 开始y
   * @param {number} x1 结束x
   * @param {number} y1 结束y
   * @param {string} color 画笔颜色
   * @param {string} lineWidth 画笔粗细
   */
  circle (x, y, x1, y1) {
    const r = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2))
    this.canvasObj.beginPath()
    this.canvasObj.arc(x, y, r, 0, 2 * Math.PI)
    if (this.type == 'stroke') {
      this.canvasObj.stroke()
    } else if (this.type == 'fill') {
      this.canvasObj.fill()
    }
    this.canvasObj.restore()
  }

  /**
   * 直线
   * @param {number} x 开始x
   * @param {number} y 开始y
   * @param {number} x1 结束x
   * @param {number} y1 结束y
   */
  line (x, y, x1, y1) {
    this.canvasObj.beginPath()
    this.canvasObj.moveTo(x, y)
    this.canvasObj.lineTo(x1, y1)
    this.canvasObj.stroke()
  }

  /**
   * 多边形
   * @param {number} x 开始x
   * @param {number} y 开始y
   * @param {number} x1 结束x
   * @param {number} y1 结束y
   * @param {number} n n边
   */
  poly (x, y, x1, y1, n = 3) {
    const r = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2))
    this.canvasObj.save()
    this.canvasObj.translate(x, y)
    this.canvasObj.rotate(Math.PI / 2)
    var nx = r * Math.cos(Math.PI / n)
    var ny = r * Math.sin(Math.PI / n)
    this.canvasObj.beginPath()
    this.canvasObj.lineCap = 'round'
    this.canvasObj.moveTo(nx, ny)
    for (var i = 0; i <= n; i++) {
      this.canvasObj.rotate(Math.PI * 2 / n)
      this.canvasObj.lineTo(nx, -ny)
    }
    if (this.type == 'stroke') {
      this.canvasObj.stroke()
    } else if (this.type == 'fill') {
      this.canvasObj.fill()
    }
    this.canvasObj.restore()
  }

  // 清空画布
  clearCanvas () {
    this.arr = []
    this.canvasObj.clearRect(0, 0, this.width, this.height)
  }

  // 撤销
  back () {
    this.arr.pop()
    this.canvasObj.clearRect(0, 0, this.width, this.height)
    if (this.arr.length) {
      this.canvasObj.putImageData(this.arr[this.arr.length - 1], 0, 0, 0, 0, this.width, this.height)
    }
  }

  /**
   * 保存每一次操作
   */
  saveStep () {
    this.arr.push(this.canvasObj.getImageData(0, 0, this.width, this.height))
  }

  /**
   * 加载图片到画布
   * @param {*} img 图片
   */
  drawImage (img, x = 0, y = 0, width = this.width, height = this.height) {
    this.canvasObj.drawImage(img, x, y, width, height)
  }
}

/**
 * 媒体录制公共方法
 * @see https://w3c.github.io/mediacapture-record/#mediarecorder-attributes
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
 * @param {number} barWidth 柱子宽度
 * @param {number} baseLine 基准线
 * @param {string} canvas 曲线图容器
 * @param {string} color 曲线图颜色
 * @param {number} space 柱子间距
 * @param {string} type 文件类型，mimeType
 * @param {boolean} isDebugger 是否调试模式
 * @param {object} option getUserMedia配置，是否开启音频，视频{ audio: true, video: true }
 * @param {function} onstop 停止时返回媒体base64数据
 * @param {function} onstart 开始录音后
 * @param {function} onerror 处理浏览器不兼容的报错信息
*/
interface RecorderInfo {
  barWidth? : number,
  baseLine?: number,
  canvas?: string,
  color?: string,
  space?: number,
  type?: string,
  isDebugger?: boolean,
  option: any,
  onstop: any,
  onstart: any,
  onerror: any,
}

/**
 * 媒体录制公共方法
 * @see https://w3c.github.io/mediacapture-record/#mediarecorder-attributes
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
 * @param {number} barWidth 柱子宽度
 * @param {number} baseLine 基准线
 * @param {string} canvas 曲线图容器
 * @param {string} color 曲线图颜色
 * @param {number} space 柱子间距
 * @param {string} type 文件类型，mimeType
 * @param {boolean} isDebugger 是否调试模式
 * @param {object} option getUserMedia配置，是否开启音频，视频{ audio: true, video: true }
 * @param {function} onstop 停止时返回媒体base64数据
 * @param {function} onstart 开始录音后
 * @param {function} onerror 处理浏览器不兼容的报错信息
 */
export const Recorder = class {
  barWidth: number
  baseLine: number
  canvas: string
  color: string
  space: number
  type: string
  isDebugger = false
  option: any
  onstop: any
  onstart: any
  onerror: any
  mediaRecorder: any = ''
  mediaStreamSource: any = null
  audioCtx: any = null
  analyser: any = null
  stopDraw = true

  constructor(options: RecorderInfo) {
    const {
      barWidth = 3,
      baseLine = 3,
      canvas = '',
      color = '#fff',
      space = 3,

      type = 'audio/mp3',
      option = {},
      onstop = {},
      onstart = {},
      onerror = {},

      isDebugger = false,
    } = options
    this.barWidth = barWidth
    this.baseLine = baseLine
    this.canvas = canvas
    this.color = color
    this.space = space

    this.type = type
    this.option = option
    this.onstop = onstop
    this.onstart = onstart
    this.onerror = onerror

    this.isDebugger = isDebugger
  }

  /**
   * 打印日志isDebugger模式
   */
  log (...args: Array<any>) {
    if (this.isDebugger) console.log(...args)
  }

  /**
   * 音频波形图
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
   * @param {*} stream 媒体流
   */
  visualize (stream: any) {
    const mediaStreamSource = this.audioCtx.createMediaStreamSource(stream)
    // 将source与分析器连接
    mediaStreamSource.connect(this.analyser)
    this.analyser.fftSize = 256
    // 将分析器与destination连接，这样才能形成到达扬声器的通路
    this.analyser.connect(this.audioCtx.destination)
    // 获取canvas
    const canvas: any = document.querySelector(this.canvas)
    // 根据实际样式重设canvas画布大小
    const {
      clientWidth,
      clientHeight,
    } = canvas
    canvas.width = clientWidth
    canvas.height = clientHeight
    const meterNum = Math.floor(clientWidth / (this.barWidth + this.space)) // 计算当前画布上能画多少条
    const canvasCtx = canvas.getContext('2d')
    /**
     * 柱状图绘制
     */
    const draw = () => {
      // 清理画布用于动态显示柱状图
      canvasCtx.clearRect(0, 0, clientWidth, clientHeight)
      if (this.stopDraw) return
      // 解析频率数据，放入dataArray数组中
      const dataArray = new Uint8Array(this.analyser.frequencyBinCount)
      this.analyser.getByteFrequencyData(dataArray)
      // 初始化柱状图x位置
      let x = 0
      // 绘制柱状图
      canvasCtx.fillStyle = this.color
      for (let i = 0; i < meterNum; i++) {
        const barHeight = dataArray[i] / 256 * clientHeight || this.baseLine
        const y = clientHeight / 2 - barHeight / 2
        canvasCtx.fillRect(x, y, this.barWidth, barHeight)
        x += this.barWidth + this.space
      }
      window.requestAnimationFrame(draw)
    }
    draw()
  }

  /**
   * 浏览器兼容
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
   */
  initMediaDevices() {
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    return !!navigator.mediaDevices && !!navigator.mediaDevices.getUserMedia && !!window.MediaRecorder
  }

  /**
   * 初始化getUserMedia方法
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
   */
  initRecording () {
    navigator.mediaDevices.getUserMedia(this.option)
      .then(stream => {
        const chunks: any = []
        this.mediaRecorder = new MediaRecorder(stream)
        // 有canvas就渲染
        if (this.canvas) {
          this.stopDraw = false
          // 处理不兼容AudioContext的问题
          try {
            this.audioCtx = new window.AudioContext() // 实例化AudioContext对象
            this.analyser = this.audioCtx.createAnalyser() // 创建分析器
            this.visualize(stream)
          } catch (err) {
            this.onerror(err)
            this.closeMediaDevices(stream)
          }
        }

        this.mediaRecorder.onstop = () => {
          this.closeMediaDevices(stream)
          const blob = new Blob(chunks, { type: this.type })
          this.readerFile(blob).then(res => {
            this.onstop(res)
          })
        }

        this.mediaRecorder.ondataavailable = (e: any) => {
          chunks.push(e.data)
        }

        this.mediaRecorder.onerror = () => {
          this.onerror()
        }

        this.start()
        this.onstart()
      })
      .catch((err: any) => {
        this.log(err, err.name, err.message)
        this.onerror()
      })
  }

  /**
   * 关闭设备
   * @param {*} mediaStreamTrack 媒体流
   */
  closeMediaDevices (mediaStreamTrack: any) {
    mediaStreamTrack && mediaStreamTrack.getTracks().forEach((track: any) => {
      track && track.stop()
    })
  }

  /**
   * 解析媒体流为base64
   * @param {*} file 媒体流
   * @return {promise} base64
   */
  readerFile (file: any) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = (e: any) => {
        this.log('音频解析完成')
        resolve(e.target.result)
      }
      reader.onerror = (e) => {
        reject(e)
      }
      reader.readAsDataURL(file)
    })
  }

  /**
   * 停止录制
   */
  stop () {
    this.mediaRecorder && this.mediaRecorder.stop()
    this.stopDraw = true
  }

  /**
   * 开始录制
   */
  start () {
    this.mediaRecorder && this.mediaRecorder.start()
  }
}

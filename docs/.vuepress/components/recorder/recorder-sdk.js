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
  constructor ({
    barWidth = 10,
    baseLine = 5,
    canvas = '',
    color = '#000',
    space = 5,
    type = 'audio/mp4',
    isDebugger = false,
    option,
    onstop,
    onstart,
    onerror,
  }) {
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
    this.mediaRecorder = ''
    this.mediaStreamSource = null
    this.audioCtx = null
    this.analyser = null
    this.stopDraw = true
  }

  /**
   * 打印日志isDebugger模式
   */
  log (...args) {
    if (this.isDebugger) console.log(...args)
  }

  /**
   * 音频波形图
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
   * @param {*} stream 媒体流
   */
  visualize (stream) {
    const mediaStreamSource = this.audioCtx.createMediaStreamSource(stream)
    // 将source与分析器连接
    mediaStreamSource.connect(this.analyser)
    this.analyser.fftSize = 256
    // 将分析器与destination连接，这样才能形成到达扬声器的通路
    this.analyser.connect(this.audioCtx.destination)
    // 获取canvas
    const canvas = document.querySelector(this.canvas)
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
  initMediaDevices () {
    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {}
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        // First get ahold of the legacy getUserMedia, if present
        const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia

        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(new Error('浏览器不支持'))
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject)
        })
      }
    }
  }

  /**
   * 初始化getUserMedia方法
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
   */
  initRecording () {
    // 处理不兼容MediaRecorder的问题
    if (!window.MediaRecorder) {
      this.onerror()
      return
    }
    // 处理不兼容AudioContext的问题
    try {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)() // 实例化AudioContext对象
      this.analyser = this.audioCtx.createAnalyser() // 创建分析器
    } catch {
      this.onerror()
      return
    }
    navigator.mediaDevices.getUserMedia(this.option)
      .then(stream => {
        const chunks = []
        this.mediaRecorder = new MediaRecorder(stream)
        // 有canvas就渲染
        if (this.canvas) {
          this.stopDraw = false
          this.visualize(stream)
        }
        this.mediaRecorder.onstop = () => {
          this.closeMediaDevices(stream)
          const blob = new Blob(chunks, { type: this.type })
          this.readerFile(blob).then(res => {
            this.onstop(res)
          })
        }

        this.mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data)
        }
        // safari不兼容
        // this.mediaRecorder.onstart = () => {
        //   this.onstart()
        // }

        this.mediaRecorder.onerror = (e) => {
          this.onerror()
        }

        this.start()
        this.onstart()
      })
      .catch((err) => {
        this.log(err, err.name, err.message)
        this.onerror()
      })
  }

  /**
   * 关闭设备
   * @param {*} mediaStreamTrack 媒体流
   */
  closeMediaDevices (mediaStreamTrack) {
    mediaStreamTrack && mediaStreamTrack.getTracks().forEach((track) => {
      track && track.stop()
    })
  }

  /**
   * 解析媒体流为base64
   * @param {*} file 媒体流
   * @return {promise} base64
   */
  readerFile (file) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
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

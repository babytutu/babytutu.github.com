/**
 * AUDIO播放
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio
 * @see https://technet.microsoft.com/en-us/gg589483(v=vs.71)
 * @param {string} src 音频地址
 * @param {function} onloadedmetadata 音频加载完可以播放时回调
 * @param {function} ontimeupdate 播放进行中回调
 * @param {function} onerror 发生错误回调
 * @param {number} isDebugger 是否调试模式
 */
export const AudioPlayer = class {
  constructor ({
    src,
    onloadedmetadata,
    ontimeupdate,
    onerror,
    isDebugger = false,
  }) {
    this.src = src
    this.onloadedmetadata = onloadedmetadata
    this.ontimeupdate = ontimeupdate
    this.onerror = onerror
    this.isDebugger = isDebugger
    this.audio = null
    this.status = 'pause'
    this.muted = false
    this.timer = ''
    this.playbackRate = 1.0
  }

  /**
   * 打印日志isDebugger模式
   */
  log (...args) {
    if (this.isDebugger) {
      console.log(...args)
    }
  }

  /**
   * 准备播放文件
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
   * @param {string} src 音频地址
   */
  initPlayer (src = this.src, volume = 1) {
    this.audio = new Audio(src)
    this.audio.volume = volume
    this.changeRate(this.playbackRate)

    // 音频加载完成后
    this.audio.onloadedmetadata = (e) => {
      this.log('onloadedmetadata', e.type)
      this.onloadedmetadata(e.target.duration)
    }

    // 播放时间变更时返回当前时间
    this.audio.ontimeupdate = (e) => {
      this.log('ontimeupdate', e.target.currentTime)
      this.ontimeupdate(e.target.currentTime)
    }

    /**
     * 处理错误
     */
    this.audio.onerror = (e) => {
      this.log('onerror', e)
      this.onerror(e)
    }

    // 暂停
    this.audio.onpause = (e) => {
      this.status = e.type
    }

    // 开始播放
    this.audio.onplay = (e) => {
      this.status = e.type
    }
  }

  /**
   * 开始播放
   */
  play () {
    this.audio && this.audio.play()
  }

  /**
   * 切换声音
   */
  toggleMute () {
    this.audio.muted = !this.audio.muted
    this.muted = this.audio.muted
  }

  /**
   * 停止播放
   */
  pause () {
    this.audio && this.audio.pause()
  }

  /**
   * 切换模式
   */
  togglePlay () {
    if (this.audio && this.audio.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  /**
   * 重置加载
   */
  reload (src) {
    this.pause()
    if (this.audio && this.audio.currentTime) {
      this.audio.currentTime = 0
    }
    this.audio.src = src
    this.status = 'ended'
    this.togglePlay()
  }

  /**
   * 变更播放进度
   * @param {*} currentTime 当前时间
   */
  changeTime (currentTime) {
    this.log('changeTime', currentTime)
    this.audio.currentTime = currentTime
    if (this.status !== 'play' && currentTime > 0) {
      this.play()
    }
  }

  /**
   * 调节音量
   * @param {number} volume 音量，0.0-1.0
   */
  changeVolume (volume) {
    this.audio.volume = volume
    this.muted = volume === 0
    this.audio.muted = this.muted
  }

  /**
   * 调节倍速
   * @param {number} rate 倍速
   */
  changeRate (rate) {
    this.audio.playbackRate = rate
    this.playbackRate = rate
  }

  /**
   * 转换秒数回显
   * @param {string}
   */
  getSecondTimeFomate (a) {
    const second = parseInt(a)
    let m = (parseInt((second % 3600) / 60))
    if (m.toString().length === 1) {
      m = '0' + m
    }
    let s = (second - 60 * m)
    if (s.toString().length === 1) {
      s = '0' + s
    }
    return (m + ':' + s)
  }
}

// eventbus简易替代方案
const mitt = (all) => {
  all = all || new Map()
  return {
    all: all,
    on: function (type, handler) {
      const handlers = all.get(type)
      if (handlers) {
        handlers.push(handler)
      } else {
        all.set(type, [handler])
      }
    },
    off: function (type, handler) {
      const handlers = all.get(type)
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1)
        } else {
          all.set(type, [])
        }
      }
    },
    emit: function (type, evt) {
      let handlers = all.get(type)
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(evt)
        })
      }
      handlers = all.get('*')
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(type, evt)
        })
      }
    },
  }
}

const emitter = mitt()

export default {
  $on: (...args) => emitter.on(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
  all: emitter.all
}

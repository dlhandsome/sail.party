import MusicPlayer from './music-player'

export default {
  install (Vue, options = {}) {
    if (document.querySelectorAll('music-player').length > 0) { return }

    const Constructor = Vue.extend(MusicPlayer)
    const vm = new Constructor({
      el: document.createElement('div')
    })

    const el = vm.$el

    document.body.appendChild(el)

    const setCurrentMusic = (src) => {
      vm.src = src
    }
    console.log(vm.$el)
    const setPlay = () => {
      vm.$el.play()
    }

    const setPause = () => {
      vm.$el.pause()
    }

    const getRef = () => vm

    Vue.prototype.$musicPlayer = {
      setCurrentMusic,
      setPlay,
      setPause,
      getRef
    }
  }
}

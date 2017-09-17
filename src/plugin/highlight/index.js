import HighLight from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

export default {
  install (Vue, options = {}) {
    Vue.directive('highlight', (el) => {
      let blocks = el.querySelectorAll('pre code')
      blocks.forEach(block => {
        HighLight.highlightBlock(block)
      })
    })
  }
}

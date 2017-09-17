<template>
  <audio class="music-player" :src="src" autoplay @ended="ended" @pause="pause" @play="play"></audio>
</template>

<script>
  export default {
    name: 'music-player',
    props: {
      src: {
        type: String,
        default: ''
      }
    },
    methods: {
      ended (e) {
        this.$emit('ended', e)
      },
      pause (e) {
        this.$emit('pause', e)
      },
      play (e) {
        this.$emit('play', e)
      }
    }
  }
</script>

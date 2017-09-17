<template>
  <div class="sail-music">
    <div class="music-control">
      <a class="prev-song" href="javascript:;" @click="prevSong">
        <i class="fa fa-fw fa-step-backward"></i>
      </a>
      <div class="music-player">
        <img class="music-cover" :src="current.img" alt="音乐封面">
        <a href="javascript:;" @click="togglePlay">
          <i class="pause-or-play fa fa-fw" :class="{ [`fa-${ playStateClass }`]: true }" />
        </a>
      </div>
      <a class="next-song" href="javascript:;" @click="nextSong">
        <i class="fa fa-fw fa-step-forward"></i>
      </a>
    </div>
    <div class="music-produce">{{ current.name }} ／ {{ current.singer }}</div>
  </div>
</template>

<script>
  import { music, PLAYER_STATE } from '@/config/music'
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Music',
    data () {
      return {
      }
    },
    computed: {
      ...mapState('music', [
        'index',
        'playState',
        'songs'
      ]),
      ...mapGetters('music', [
        'current'
      ]),
      playStateClass () {
        return this.playState === PLAYER_STATE.PLAY ? 'pause-circle' : 'play-circle'
      }
    },
    methods: {
      ...mapActions('music', [
        'initMusic',
        'prevSong',
        'nextSong',
        'toggleState'
      ]),
      ended () {
        console.log('播放即将结束')
        this.nextSong() // 播放结束跳转下一首
      },
      pause () {
        console.log('now is pause')
        this.toggleState(PLAYER_STATE.PAUSE)
      },
      play () {
        console.log('now is play')
        this.toggleState(PLAYER_STATE.PLAY)
      },
      // 暂停／播放
      togglePlay () {
        if (this.playState === PLAYER_STATE.PLAY) {
          this.$musicPlayer.setPause()
        } else {
          this.$musicPlayer.setPlay()
        }
      }
    },
    created () {
      this.initMusic(music)
      const player = this.$musicPlayer.getRef()
      player.$on('play', () => {
        this.toggleState(PLAYER_STATE.PLAY)
      })
      player.$on('pause', () => {
        this.toggleState(PLAYER_STATE.PAUSE)
      })
      player.$on('ended', () => {
        this.nextSong() // 播放结束跳转下一首
      })
    }
  }
</script>

<style lang="less">
  @import "../style/mixin";

  .sail-music{
    width: 100%;
    height: 50em;
    .flex-layout();
    flex-direction: column;

    .music-control{
      .flex-layout(space-between);
      .prev-song, .next-song{
        font-size: 3em;
        i {  color: #ccc; }
        &:hover{
          i{
            color: #777777;
          }
        }
      }
      .music-player{
        position: relative;
        width: 30em;
        height: 30em;
        margin: 0 2.5em;
        .music-cover{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-sizing: border-box;
          border: 1em solid #e5e5e5;
          animation: rotate 20s linear infinite;
        }
        .pause-or-play{
          position: absolute;
          font-size: 6em;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(255, 255, 255, .5);
          &:hover{
            font-size: 7em;
          }
        }
      }
    }

    .music-produce{
      margin-top: 5em;
    }
  }
</style>

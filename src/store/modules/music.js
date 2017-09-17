import {
  MUSIC_NEXT,
  MUSIC_PREV,
  MUSIC_PAUSE_PLAY,
  MUSIC_INIT
} from '../mutation-type'
import { PLAYER_STATE } from '@/config/music'
import { isArray } from '@/utils'

const state = {
  index: 0,
  playState: PLAYER_STATE.PAUSE,
  songs: []
}

const getters = {
  current: state => state.songs[state.index]
}

const mutations = {
  [MUSIC_INIT] (state, list) {
    if (isArray(list)) {
      state.songs = list
    }
  },
  [MUSIC_NEXT] (state) {
    if (state.index === state.songs.length - 1) {
      state.index = 0
    } else {
      state.index ++
    }
  },
  [MUSIC_PREV] (state) {
    if (state.index === 0) {
      state.index = state.songs.length - 1
    } else {
      state.index --
    }
  },
  [MUSIC_PAUSE_PLAY] (state, playState) {
    state.playState = (playState) ? 1 : 0
  }
}

const actions = {
  initMusic ({ commit }, list) {
    commit(MUSIC_INIT, list)
  },
  prevSong ({ commit }) {
    commit(MUSIC_PREV)
  },
  nextSong ({ commit }) {
    commit(MUSIC_NEXT)
  },
  toggleState ({ commit }, playState) {
    commit(MUSIC_PAUSE_PLAY, playState)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

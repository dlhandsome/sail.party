import Service from '~/plugins/axios'

export const actions = {
  // 获取文章列表
  async loadArticles({ commit }) {
    try {
      const result = await Service.get('/repos/dlhandsome/Blog/issues')
      commit('article/GET_LIST_SUCCESS', result.data)
    } catch (e) {}
  }
}
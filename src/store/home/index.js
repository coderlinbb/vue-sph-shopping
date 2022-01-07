import { reqCategoryList } from '@/api'

const actions = {
  async categoryList({ commit }) {
    let res = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
    }
  }
}

const mutations = {
  CATEGORYLIST(state, payload) {
    state.categoryList = payload.slice(0, 15)
  }
}

const state = {
  categoryList: []
}

const getters = {}


export default {
  // namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
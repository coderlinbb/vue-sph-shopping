import { reqGetSearchInfo } from '@/api'

const actions = {
  async getSearchList({ commit }, params) {
    let res = await reqGetSearchInfo(params)
    if (res.code === 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}

const mutations = {
  GETSEARCHLIST(state, data) {
    state.searchList = data
  }
}

const state = {
  searchList: {}
}

const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList
  },
  attrsList(state) {
    return state.searchList.attrsList
  }
}


export default {
  // namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
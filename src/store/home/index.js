import { reqGetCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'

const actions = {
  async categoryList({ commit }) {
    let res = await reqGetCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
    }
  },
  async getBannerList({ commit }) {
    let res = await reqGetBannerList()
    if (res.code === 200) {
      commit("GETBANNERLIST", res.data)
    }
  },
  async getFloorlist({ commit }) {
    let res = await reqGetFloorList()
    if (res.code === 200) {
      commit("GETFLOORLIST", res.data)
    }
  },
}

const mutations = {
  CATEGORYLIST(state, payload) {
    state.categoryList = payload.slice(0, 15)
  },
  GETBANNERLIST(state, payload) {
    state.bannerList = payload
  },
  GETFLOORLIST(state, payload) {
    state.floorList = payload
  }
}

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const getters = {}


export default {
  // namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
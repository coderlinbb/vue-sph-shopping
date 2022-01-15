import { reqAddressInfo, reqOrderInfo } from '@/api'

const actions = {
  async getUserAddress({ commit }) {
    let res = await reqAddressInfo()
    if (res.code == 200) {
      commit('GETUSERADDRESS', res.data)
    }
  },
  async getOrderInfo({ commit }) {
    let res = await reqOrderInfo()
    console.log("111", res);
    if (res.code) {
      commit('GETORDERINFO', res.data)
    }
  }
}
const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const state = {
  address: [],
  orderInfo: {}
}
const getters = {}

export default {
  // namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
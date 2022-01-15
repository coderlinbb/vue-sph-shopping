import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'

const actions = {
  async getCartList({ commit }) {
    let res = await reqCartList()
    if (res.code == 200) {
      commit('GETCARTLIST', res.data)
    }
  },
  async deleteCartListSkuId({ commit }, skuId) {
    let res = await reqDeleteCartById(skuId)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let res = await reqUpdateCheckedById(skuId, isChecked)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListSkuId', item.skuId) : ''
      PromiseAll.push(promise)
    });
    return Promise.all(PromiseAll)
  },
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let PromiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  }
}
const mutations = {
  GETCARTLIST(state, data) {
    state.cartList = data
  }
}
const state = {
  cartList: []
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default {
  // namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
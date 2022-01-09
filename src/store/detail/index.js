import { reqGetGoodsInfo, reqAddOrUpdateShopCart } from '@/api';

const actions = {
  async getGoodInfo({ commit }, skuId) {
    let res = await reqGetGoodsInfo(skuId)
    if (res.code == 200) {
      commit('GETGOODINFO', res.data)
    }
  },
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    let res = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
}

const mutations = {
  GETGOODINFO(state, data) {
    state.goodInfo = data
  }
}

const state = {
  goodInfo: {}
}

const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  },
}

export default {
  actions,
  mutations,
  state,
  getters

}

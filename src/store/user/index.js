import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api'


const actions = {
  async getCode({ commit }, phone) {
    let res = await reqGetCode(phone)
    console.log(res);
    if (res.code == 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async userRegister({ commit }, user) {
    let res = await reqUserRegister(user)
    if (res.code == 200) {
      return 'ok'
    } else if (res.code == 223) {
      return res.message
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async userLogin({ commit }, data) {
    let res = await reqUserLogin(data)
    if (res.code == 200) {
      commit('USERLOGIN', res.data.token)
      localStorage.setItem('TOKEN', res.data.token)
      return res.message
    } else if (res.code == 207) {
      return res.message
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async getUserInfo({ commit }) {
    let res = await reqUserInfo()
    if (res.code == 200) {
      commit('GETUSERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async userLogout({ commit }) {
    let res = await reqLogout()
    if (res.code == 200) {
      commit("CLEAR")
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
}

const mutations = {
  GETCODE(state, data) {
    state.code = data
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR(state) {
    state.token = ''
    state.userInfo = {}
    localStorage.removeItem('TOKEN')
  }
}

const state = {
  code: '',
  token: localStorage.getItem('TOKEN') || '',
  userInfo: {},

}

const getters = {}

export default {
  // namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
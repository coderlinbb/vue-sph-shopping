import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css";

import store from '@/store'

// 配置不显示右上角的旋转进度条, 只显示水平进度条
nprogress.configure({ showSpinner: false })

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})
requests.interceptors.request.use((config) => {
  nprogress.start();
  if (store.state.detail.uuid_token) {
    config.headers['userTempId'] = store.state.detail.uuid_token
  }
  if (store.state.user.token) {
    config.headers['token'] = store.state.user.token
  }
  return config;
});
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, (error) => {
  console.error(`请求出错:${error.message || '未知错误'}`)
  return alert("服务器响应数据失败");
})


export default requests
import axios from 'axios'

const requests = axios.create({
  baseURL: '/mock',
  timeout: 5000
})
requests.interceptors.request.use((config) => {
  return config;
});
requests.interceptors.response.use((res) => {
  return res.data
}, (error) => {
  console.error(`请求出错:${error.message || '未知错误'}`)
  return alert("服务器响应数据失败");
})


export default requests
import Mock from 'mockjs'
import banners from './banners.json'
import floor from './floor.json'

Mock.setup({
  timeout: 200
})
Mock.mock('/mock/banner', { data: banners, code: 200 })
Mock.mock('/mock/floor', { data: floor, code: 200 })
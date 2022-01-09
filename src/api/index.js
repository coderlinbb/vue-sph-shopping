import requests from './request'
import mockRequest from './mockAjax'

///api/product/getBaseCategoryList

export const reqGetCategoryList = () => requests({ methods: "get", url: "/product/getBaseCategoryList" })

export const reqGetBannerList = () => mockRequest.get('/banner')

export const reqGetFloorList = () => mockRequest.get('/floor')

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })


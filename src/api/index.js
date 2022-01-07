import requests from './request'

///api/product/getBaseCategoryList

export const reqCategoryList = () => requests({ methods: "get", url: "/product/getBaseCategoryList" })


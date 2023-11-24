import {http} from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem,GuessItem } from '@/types/home'
import type {PageResult,PageParams} from '@/types/global'
export const getHomeBannerAPi = (distributionSite=1)=>{
    return http<BannerItem[]>({
        method:'GET',
        url:'/home/banner',
        data:{
            distributionSite
        }
    })
}
export const getHomeCategoryApi = ()=>{
    return http<CategoryItem[]>({
        method:'GET',
        url:'/home/category/mutli',
    })
}

export const getHomeHotApi = ()=>{
    return http<HotItem[]>({
        method:'GET',
        url:'/home/hot/mutli'
    })
}

// src/services/home.ts
/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
      method: 'GET',
      url: '/home/goods/guessLike',
      data,
    })
  }



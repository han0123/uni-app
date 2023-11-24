import {http} from '@/utils/http'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
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



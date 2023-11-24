<template>
  <view class="viewport">
    <CustomNavbar />
    <scroll-view scroll-y>
      <XtxSwiper :list="list" />
      <CategoryPanel :categoryList="categoryList" />
      <HotPanel :HotList="HotList"/>
      <XtxGuess/>
      
    </scroll-view>
    
    
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from './components/CustomNavbar';
import CategoryPanel from './components/CategoryPanel';
import HotPanel from './components/HotPanel';
import { getHomeBannerAPi, getHomeCategoryApi,getHomeHotApi } from '../../services/home.ts';
import type { BannerItem, CategoryItem,HotItem } from '../../types/home.d.ts';

const list = ref<BannerItem[]>([]);
const categoryList = ref<CategoryItem[]>([]);
const HotList = ref<HotItem[]>([])

const getHomeBanner = async () => {
  const res = await getHomeBannerAPi();
  list.value = res.result;
  // console.log(res);
};
const getHomeCategory = async () => {
  const res = await getHomeCategoryApi();
  categoryList.value = res.result;
  // console.log(res)
};

const getHomeHot = async ()=>{
  const res = await getHomeHotApi()
  HotList.value = res.result
}
onLoad(() => {
  getHomeBanner();
  getHomeCategory();
  getHomeHot()
});
</script>

<style lang="scss">
page{
  background-color: #f7f7f7;
  height: 100%;
  // overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>

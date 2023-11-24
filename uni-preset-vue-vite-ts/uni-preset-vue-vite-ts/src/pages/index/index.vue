<template>
  <view class="viewport">
    <CustomNavbar />
    <XtxSwiper :list="list"/>
    <CategoryPanel :categoryList="categoryList"/>
    <HotPanel/>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from './componets/CustomNavbar';
import CategoryPanel from '../../components/CategoryPanel'
import HotPanel from '../../components/HotPanel'
import { getHomeBannerAPi,getHomeCategoryApi } from '../../services/home.ts';
import type { BannerItem,CategoryItem } from '../../types/home.d.ts';


const list = ref<BannerItem[]>([]);
const categoryList = ref<CategoryItem[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPi();
  list.value = res.result;
  // console.log(res);
};
const getHomeCategory = async()=>{
  const res = await getHomeCategoryApi()
  categoryList.value = res.result
  // console.log(res)
}
onLoad(() => {
  getHomeBanner();
  getHomeCategory()
});
</script>

<style lang="scss">
.page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
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

<template>
  <view class="viewport">
    <CustomNavbar />
    <scroll-view
      refresher-enabled
      @refresherrefresh="onrefresherrefresh"
      :refresher-triggered="Triggered"
      class="scroll-view"
      scroll-y
      @scrolltolower="onscrolltolower"
    >
      <PageSkeleton v-if="isLoading"/>
      <template v-else>
        <XtxSwiper :list="list" />
        <CategoryPanel :categoryList="categoryList" />
        <HotPanel :HotList="HotList" />
        <XtxGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from './components/CustomNavbar';
import CategoryPanel from './components/CategoryPanel';
import HotPanel from './components/HotPanel';
import {
  getHomeBannerAPi,
  getHomeCategoryApi,
  getHomeHotApi,
} from '../../services/home.ts';
import type { BannerItem, CategoryItem, HotItem } from '../../types/home.d.ts';
import type { XtxGuessInstance } from '../../types/components.d.ts';
import PageSkeleton from './components/PageSkeleton';
const list = ref<BannerItem[]>([]);
const categoryList = ref<CategoryItem[]>([]);
const HotList = ref<HotItem[]>([]);
const guessRef = ref<XtxGuessInstance>();
const Triggered = ref(false);
const isLoading = ref(false)
//
// 轮播图
const getHomeBanner = async () => {
  const res = await getHomeBannerAPi();
  list.value = res.result;
  // console.log(res);
};

// 商品分类
const getHomeCategory = async () => {
  const res = await getHomeCategoryApi();
  categoryList.value = res.result;
  // console.log(res)
};
// 特惠推荐
const getHomeHot = async () => {
  const res = await getHomeHotApi();
  HotList.value = res.result;
};
// 猜你喜欢
const onscrolltolower = () => {
  // console.log("触底了")
  guessRef.value?.getMore();
};

// 下拉刷新
const onrefresherrefresh = async () => {
  // console.log('下拉了')
  // 重新发送请求
  Triggered.value = true;
  // 这里调用重置刷新的猜你喜欢
  guessRef.value?.resetData();
  await Promise.all([
    getHomeBanner(),
    getHomeCategory(),
    getHomeHot(),
    guessRef.value?.getMore(),
  ]);

  Triggered.value = false;
};

onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBanner(),
    getHomeCategory(),
    getHomeHot(),
  ]);
  isLoading.value = false
});
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  // overflow: hidden;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
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

<script setup lang="ts">
//

import { onMounted, ref } from 'vue';
import { getHomeGoodsGuessLikeAPI } from '../services/home.ts';
import type { GuessItem } from '@/types/home';
const guessList = ref<GuessItem[]>([]);
const finish = ref(false);
const PageParams = {
  page: 30,
  pageSize: 10,
};

const getHomeGoodsGuessLike = async () => {
  if (finish.value == true) {
    return;
  }
  const res = await getHomeGoodsGuessLikeAPI(PageParams);
  // console.log(res)
  //   guessList.value = res.result.items;
  //   数据可追加
  guessList.value.push(...res.result.items);
  //   判断触底的条件
  if (PageParams.page < res.result.pages) {
    // 页码要加
    PageParams.page++;
  } else {
    finish.value = true;
  }
};
onMounted(() => {
  getHomeGoodsGuessLike();
});

defineExpose({
  getMore: getHomeGoodsGuessLike,
});
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">
        {{ item.name }}
      </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">{{finish?'已经到底了':'正在加载...'}}</view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 310rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 70rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>

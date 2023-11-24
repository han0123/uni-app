<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image
              class="image XtxSwiper--image sk-image"
              mode="aspectFill"
            ></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-832 sk-text"
          >居家</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-355 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-931 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-800 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-882 sk-text"
          >个护</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-392 sk-text"
          >严选</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-929 sk-text"
          >数码</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-626 sk-text"
          >运动</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-528 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator
        class="category-item CategoryPanel--category-item"
        hover-class="none"
      >
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text
          class="text CategoryPanel--text sk-transparent sk-text-14-2857-927 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-607 sk-text"
            >特惠推荐</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-409 sk-text"
            >它们最实惠</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-945 sk-text"
            >爆款推荐</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-4 sk-text"
            >它们最受欢迎</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-253 sk-text"
            >一站买全</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-229 sk-text"
            >使用场景下精心优选</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text
            class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-888 sk-text"
            >领券中心</text
          >
          <text
            class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-239 sk-text"
            >更多超值优惠券</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
          <image
            class="image HotPanel--image sk-image"
            mode="aspectFit"
          ></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r">
    <view class="caption XtxGuess--caption"></view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-310 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-972 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-832 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-355 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-931 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-800 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-882 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-392 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-929 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-626 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-528 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-927 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-607 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-409 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-945 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-4 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-253 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-229 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-888 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-239 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>

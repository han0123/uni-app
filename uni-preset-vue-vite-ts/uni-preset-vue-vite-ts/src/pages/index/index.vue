<template>
  <view class="viewport">
    <CustomNavbar/>
    <XtxSwiper/>
  </view>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './componets/CustomNavbar'

</script>

<style lang='scss'>

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

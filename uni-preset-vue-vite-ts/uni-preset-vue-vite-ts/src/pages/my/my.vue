<template>
  <view>
    <view >
      <text>会员信息:{{memberStore.profile}}</text>
    </view>
    <button @tap="memberStore.setProfile({
        nickname:'黑马先锋',
    })"
    size="mini"
    plain
    type="primary"
    >保存用户信息</button>

    <button @tap="memberStore.clearProfile()"
    size="mini"
    plain
    type="warn"
    >消除用户信息</button>

    <button @tap="getData()"
    size="mini"
    plain
    type="primary"
    >发送请求</button>
    

  </view>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
    import {useMemberStore} from '@/stores'
    import {http} from'@/utils/http'
  export default defineComponent({
    name:'my',
  })
</script>

<script setup lang="ts">
  const memberStore = useMemberStore()
  const getData = ()=>{
    http({
        method:'GET',
        url:'/home/banner',
        header:{},
    })
  }
</script>

<style scoped>
  
</style>
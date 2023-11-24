import XtxSwiper from '../components/XtxSwiper.vue';
// 因为pages.json中这个并不安全，所以使用volar+ ts这个就是会比较安全的变成全局组件。
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper;
  }
}

import XtxSwiper from '../components/XtxSwiper.vue';
import XtxGuess from '../components/XtxGuess.vue'
// 因为pages.json中这个并不安全，所以使用volar+ ts这个就是会比较安全的变成全局组件。
// 这个文件就是放置通用组件的类型的

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper;
    XtxGuess:typeof XtxGuess;
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>

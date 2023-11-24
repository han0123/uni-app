import { useMemberStore } from "@/stores"
// 这里设置的是基础路径
const baseURL ='https://pcapi-xiaotuxian-front-devtest.itheima.net'
// 拦截器
const httpInterceptor ={
    invoke(args:any) {
        // request 触发前拼接 url 
        if(!args.url.startsWith('http')){
            args.url = baseURL + args.url
            console.log(123,args.url)
        }
        // 设置超时时间
        args.timeout = 10000
        // 添加请求头
        args.heads = {
            ...args.header,
            'source-client': 'miniapp'
        }
        console.log(args)
         // 4. 添加 token 请求头标识
         const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        // 如果存在token就添加上去
        if (token) {
            args.header.Authorization = token
        }
  

      },
    
}
uni.addInterceptor('request',httpInterceptor);
// 这里是上传
uni.addInterceptor('uploadFile',httpInterceptor);


// 配置请求函数

type Data<T> = {
    code: string
    msg: string
    result: T
  }
  // 2.2 添加类型，支持泛型
  export const http = <T>(options: UniApp.RequestOptions) => {
    // 1. 返回 Promise 对象
    return new Promise<Data<T>>((resolve, reject) => {
      uni.request({
        ...options,
        // 响应成功
        success(res) {
          // 状态码 2xx， axios 就是这样设计的
          if (res.statusCode >= 200 && res.statusCode < 300) {
            // 2.1 提取核心数据 res.data
            resolve(res.data as Data<T>)
          } else if (res.statusCode === 401) {
            // 401错误  -> 清理用户信息，跳转到登录页
            const memberStore = useMemberStore()
            memberStore.clearProfile()
            uni.navigateTo({ url: '/pages/login/login' })
            reject(res)
          } else {
            // 其他错误 -> 根据后端错误信息轻提示
            uni.showToast({
              icon: 'none',
              title: (res.data as Data<T>).msg || '请求错误',
            })
            reject(res)
          }
        },
        // 响应失败
        fail(err) {
          uni.showToast({
            icon: 'none',
            title: '网络错误，换个网络试试',
          })
          reject(err)
        },
      })
    })
  }
  
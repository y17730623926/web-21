import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import work from '@/components/work'
import home from '@/components/home'
import page from '@/views/page'
import count from '@/views/count'
import index from '@/views/index'
import register from '@/components/register'  //注册
import login from '@/components/login'    //登录
import echarts from '@/components/echarts'    //echarts
import show from '@/components/show'    //echarts

Vue.use(Router)
const user = {
  template:`<div> <h1>我是user父组件</h1> <router-view/></div>`
}
const profile = {
  template:`<div> <h1>我是profile子组件</h1> </div>`
}
const posts = {
  template:`<div> <h1>我是posts子组件</h1> </div>`
}
const notFound = {
  template:`<div><h1>页面丢失</h1></div>`
}

const router =  new Router({
  mode:"history", //切换模式  history表示路经没有 # , hash时哈希模式 有 #
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path:'/work/:id',
      name:'work',
      component:work
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/page',
      name:'page',
      component:page
    },
    {
      path:'/user/:id',
      name:'user',
      component:user,
      children:[
        {
          path:'',
          name:'profile',
          component:profile
        },
        {
          path:'/posts',
          name:'posts',
          component:posts
        }
      ]
    },
    //路由重定向
    {
      path:"*",
      component: notFound,
      redirect(to){
        console.log(to);
        if(to.path === "/aaa"){
          return 'page'
        } else if (to.path === "/bbb") {
          return "home"
        } else {
          return "login"
        }
      }
    }
  ]
})
//login   路由守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path === "/login" || to.path === "/register") {
//     next()
//   } else {
//     let token = localStorage.getItem("token");
//     if (token === null || token === "") {
//       next("/login");
//     }
//   }o
// });

export default router
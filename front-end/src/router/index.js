import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import List from '@/components/List'
import Find from '@/components/Find'
import ShopCar from '@/components/ShopCar'
import User from '@/components/User'
import main from '@/views/main'
import Product from '@/components/Product'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'main',
      component: main,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home
        },
        {
          path: 'List',
          name: 'List',
          component: List
        },
        {
          path: 'Find',
          name: 'Find',
          component: Find
        },
        {
          path: 'ShopCar',
          name: 'ShopCar',
          component: ShopCar
        },
        {
          path: 'User',
          name: 'User',
          component: User,

        },
        {
          path: '',
          redirect: Home
        }
      ]
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:()=> import('@/views/register.vue')
    },
    {
      path:'/register1',
      name:'register1',
      component:()=> import('@/views/register1.vue')
    },
    {
      path:'/register2',
      name:'register2',
      component:()=> import('@/views/register2.vue')
    },
    {
      path: '/*',
      redirect: '/Home'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})

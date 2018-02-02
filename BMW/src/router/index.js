import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HelloWorld from '@/components/HelloWorld'
import Media from '@/components/Media'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Media',
      name: 'Home',
      component: Home,
      children: [
        {
    	path:'Media',
    	name:'Media',
    	component:Media
    }]
    }
  ]
})

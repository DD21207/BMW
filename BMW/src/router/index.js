import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Market from '@/components/Market'
import dealViewer from '@/components/dealViewer'
import Digital from '@/components/DealViewer/Digital'
import OOH from '@/components/DealViewer/OOH'
import TV from '@/components/DealViewer/TV'
import Radio from '@/components/DealViewer/Radio'
import Magazine from '@/components/DealViewer/Magazine'
import Newspaper from '@/components/DealViewer/Newspaper'
import Settings from '@/components/Settings'





Vue.use(Router)

export default new Router({
  base:'/BMW/',
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/dealViewer',
    name: 'Home',
    component: Home,
    children: [{
        path: 'dealViewer',
        name: 'dealViewer',
        component: dealViewer,
      },
      {
         path: 'dealViewer/Digital',
        name: 'dealViewer/Digital',
        component: Digital,
      },
      {
         path: 'dealViewer/OOH',
        name: 'dealViewer/OOH',
        component: OOH,
      },
      {
         path: 'dealViewer/TV',
        name: 'dealViewer/TV',
        component: TV,
      },
      {
         path: 'dealViewer/Radio',
        name: 'dealViewer/Radio',
        component: Radio,
      },
      {
         path: 'dealViewer/Magazine',
        name: 'dealViewer/Magazine',
        component: Magazine,
      },
      {
         path: 'dealViewer/Newspaper',
        name: 'dealViewer/Newspaper',
        component: Newspaper,
      },
      {
        path: 'Market',
        name: 'Market',
        component: Market
      }, 
      {
        path: 'Settings',
        name: 'Settings',
        component: Settings
      }
    ]
  }]
})

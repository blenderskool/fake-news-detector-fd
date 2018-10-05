import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import CheckNews from './views/CheckNews'
import ReportNews from './views/ReportNews'
import Offline from './views/Offline'
import NotFound from './views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news-status',
      component: CheckNews
    },
    {
      path: '/report-news',
      name: 'report-news',
      component: ReportNews
    },
    {
      path: '/offline',
      name: 'offline',
      component: Offline
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/Button'
import ButtonDetail from '../components/ButtonDetail'
import Link from '../components/Link'
import Tree from '../components/Tree'
import Layout from '../components/Layout'
import Index from '../components/Index'
import List from '../components/user/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/buttonDetail',
      component: ButtonDetail
    },
    {
      path: '/link',
      component: Link
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/userList',
      component: List
    }
  ]
})

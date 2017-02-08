import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import MainTable from 'components/MainTable'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'table',
      component: MainTable
    }
  ]
})

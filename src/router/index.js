import Vue from 'vue'
import Router from 'vue-router'
import UserRoute from './user'
import MessageRoute from './message'
import PlantRoute from './planet'
import SquareRoute from './square'




Vue.use(Router)

// 通过...运算符把所有的路由拼接
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/planet'
    },
	  ...UserRoute,
	  ...MessageRoute,
	  ...SquareRoute,
	  ...PlantRoute,
  ]
})

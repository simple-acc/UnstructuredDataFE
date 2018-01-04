import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Main from '@/views/main/main'
import DigitalDictionary from '@/views/main/digitalDictionary'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'digitalDictionary',
          name: 'DigitalDictionary',
          component: DigitalDictionary
        }
      ]
    }
  ]
})

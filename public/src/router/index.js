import Vue from 'vue'
// import Sortable from 'vue-sortable'
import Router from 'vue-router'
//@ts-ignore
import Home from '@/components/Home'
//@ts-ignore
import Login from '@/components/Itunes'
//@ts-ignore
import Post from '@/components/MyTunes'

Vue.use(Router);
// Vue.use(Sortable);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

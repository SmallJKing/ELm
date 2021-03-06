import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/goods',
      component: Index,
      children: [
         {
          path: '/goods',
          name: 'goods',
          component: goods
        }, {
          path: '/ratings',
          name: 'ratings',
          component: ratings
        }, {
          path: '/seller',
          name: 'seller',
          component: seller
        }
      ]
    }]
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Index from '/components/main/main';
import Hello from '/components/Hello';

Vue.use(VueRouter);
Vue.prototype.$ajax = axios;

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      component: Hello
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Index/>',
  components: { Index }
});

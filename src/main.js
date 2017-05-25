import Vue from 'vue';
// import VueRouter from 'vue-router';
import axios from 'axios';
import Index from '/components/main/main';
import Vuex from 'vuex';

// Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$ajax = axios;

// let router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/hello',
//       component: Hello
//     }
//   ]
// });
let store = new Vuex.Store({
  state: {
    service: false
  },
  mutations: {
    change (state, service) {
      state.service = !service;
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<Index/>',
  components: { Index }
});

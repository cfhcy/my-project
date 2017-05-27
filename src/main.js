import Vue from 'vue';
import axios from 'axios';
import store from './store';
import router from './router/index';
import Index from 'components/root';

Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<Index/>',
  components: { Index }
});

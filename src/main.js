// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./styles/main.scss');

import Vue from 'vue';
import App from './App';
import router from './router';
import vmodal from 'vue-js-modal';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.config.productionTip = false;
Vue.component('icon', Icon);
Vue.use(vmodal);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});

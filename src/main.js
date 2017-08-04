// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./styles/main.scss');

import Vue from 'vue';
import App from './App';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';
import vmodal from 'vue-js-modal';
Vue.config.productionTip = false;

Vue.use(vmodal);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDgXteEs_ZOy8ttatYb2ZKn1KWUprclD0w'
    // libraries: 'places', //// If you need to use place input
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});

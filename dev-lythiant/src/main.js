import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery';

global.jQuery = jQuery;
global.$ = jQuery;
Vue.config.productionTip = false;

require('../node_modules/jquery/dist/jquery.js');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../node_modules/@fortawesome/fontawesome-free/css/all.css');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

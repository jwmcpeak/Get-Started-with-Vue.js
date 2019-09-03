import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'
import storage from './storage';

Vue.config.productionTip = false

Vue.prototype.$todos = storage;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

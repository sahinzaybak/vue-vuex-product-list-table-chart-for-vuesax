import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import storeOptions from './store/store'
import {BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
// import vWow from 'v-wow'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(vWow);
Vue.use(Vuex)

const store = new Vuex.Store(storeOptions);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

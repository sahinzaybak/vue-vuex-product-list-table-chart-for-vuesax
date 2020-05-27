import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import storeOptions from './store/store'
import {BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
import Vuesax from 'vuesax'
import vWow from 'v-wow'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuex)
Vue.use(Vuesax)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(vWow);
const store = new Vuex.Store(storeOptions);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import storeOptions from './store/store'
import vWow from 'v-wow'
Vue.use(vWow);
Vue.use(Vuex)
const store = new Vuex.Store(storeOptions);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

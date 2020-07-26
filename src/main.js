import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

Vue.use(VueAxios, axios)

Vue.use(VueAuthenticate, {
  tokenName: 'access_token',
  providers: {
    google: {
      clientId: process.env.VUE_APP_GOOGLE_OAUTH_CLIENT_ID,
      redirectUri: process.env.VUE_APP_AUTH_REDIRECT_URI,
      url: process.env.VUE_APP_AUTH_API_URL
    }
  }
})

// const vueAuth = new VueAuthenticate(Vue.prototype.$http, {
//   baseUrl: 'http://localhost:8000',
//   providers: {
//     google: {
//       clientId: process.env.VUE_APP_GOOGLE_OAUTH_CLIENT_ID,
//       redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
//     }
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

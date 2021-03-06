import Vue from 'vue'
import App from './App'

import router from './router'

const app = new Vue({
  router,
  template: '<app/>',
  components: {
    App
  }
})

app.$mount('#app')

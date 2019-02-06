import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase';


Vue.use(VueAxios, axios)

Vue.config.productionTip = false


// Ersätt denna data med er egen
var config = {
  apiKey: "AIzaSyATl3esM42a6zkXUjIjyhZZYpuFZlUCk0g",
  authDomain: "slice-pizza-1337.firebaseapp.com",
  databaseURL: "https://slice-pizza-1337.firebaseio.com",
  projectId: "slice-pizza-1337"
};

firebase.initializeApp(config);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

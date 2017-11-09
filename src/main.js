import "./styles/App.scss";
import 'element-ui/lib/theme-chalk/index.css';


import Vue from 'vue';
import ElementUI from "element-ui";
Vue.use(ElementUI, { size: 'small' });
import App from './App';
import router from './router';
import store from "./vuex/store.js";

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  
})

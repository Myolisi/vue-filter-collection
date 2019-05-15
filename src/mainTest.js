import Vue from "vue";
import App from "./App.vue";
import vueFilterCollection from "./index";

Vue.use(vueFilterCollection);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

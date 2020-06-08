import Vue from "vue";
import App from "./App.vue";
import vueFiltersCollection from "./index";

Vue.use(vueFiltersCollection);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

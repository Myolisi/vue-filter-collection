import camelcase from "./camelcase";
import capitalize from "./capitalize";
import htmlEntities from "./htmlEntities";
export default {
  install(Vue) {
    Vue.filter("camelcase", camelcase);
    Vue.filter("capitalize", capitalize);
    Vue.filter("htmlEntities", htmlEntities);
  }
};

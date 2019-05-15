import camelcase from "./filters/camelcase";
import capitalize from "./filters/capitalize";
import htmlEntities from "./filters/htmlEntities";
export default {
  install(Vue) {
    Vue.filter("camelcase", camelcase);
    Vue.filter("capitalize", capitalize);
    Vue.filter("htmlEntities", htmlEntities);
  }
};

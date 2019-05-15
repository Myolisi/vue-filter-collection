import camelcase from "./src/filters/camelcase";
import capitalize from "./src/filters/capitalize";
import htmlEntities from "./src/filters/htmlEntities";
export default {
  install(Vue) {
    Vue.filter("camelcase", camelcase);
    Vue.filter("capitalize", capitalize);
    Vue.filter("htmlEntities", htmlEntities);
  }
};

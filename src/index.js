import { camelcase } from "./filters/camelcase";
import { capitalize } from "./filters/capitalize";
import { htmlEntities } from "./filters/htmlEntities";

const vueFilterCollection = {
  install(Vue, options) {
    camelcase(Vue, options);
    capitalize(Vue, options);
    htmlEntities(Vue, options);
  }
};

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vueFilterCollection);
}
export default vueFilterCollection;
export const version = "__VERSION__";

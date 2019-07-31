import { camelcase } from "./filters/camelcase";
import { capitalize } from "./filters/capitalize";
import { htmlEntities } from "./filters/htmlEntities";
import { decapitalize } from "./filters/decapitalize";

const vueFiltersCollection = {
  install(Vue, options) {
    camelcase(Vue, options);
    capitalize(Vue, options);
    decapitalize(Vue, options);
    htmlEntities(Vue, options);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vueFiltersCollection);
}

export default vueFiltersCollection;

import { camelcase } from "./filters/camelcase";
import { capitalize } from "./filters/capitalize";
import { htmlEntities } from "./filters/htmlEntities";

export const pcamelcase = {
  install(Vue, options) {
    camelcase(Vue, options);
  }
};
export const pcapitalize = {
  install(Vue, options) {
    capitalize(Vue, options);
  }
};
export const phtmlEntities = {
  install(Vue, options) {
    htmlEntities(Vue, options);
  }
};

const vueFiltersCollection = {
  install(Vue, options) {
    camelcase(Vue, options);
    capitalize(Vue, options);
    htmlEntities(Vue, options);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(vueFiltersCollection);
}

export default vueFiltersCollection;

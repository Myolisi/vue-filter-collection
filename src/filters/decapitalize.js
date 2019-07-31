export const decapitalize = Vue => {
  Vue.filter("decapitalize", value => {
    if (!value) return;
    return decapitalize(value);
  });

  Vue.prototype.$decapitalize = value => {
    return decapitalize(value);
  };

  function decapitalize(value) {
    if (value && isNaN(value)) {
      return value.toLowerCase();
    }
    return value;
  }
};

export const htmlEntities = Vue => {
  Vue.filter("htmlEntities", value => {
    if (!value) return;
    return htmlEntities(value);
  });

  Vue.prototype.$htmlEntities = value => {
    return htmlEntities(value);
  };

  function htmlEntities(value) {
    if (value && isNaN(value)) {
      return value.replace(/&quot;/g, '"');
    }
    return value;
  }
};

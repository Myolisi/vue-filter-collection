export const htmlEntities = Vue => {
  Vue.filter("htmlEntities", value => {
    if (value && isNaN(value)) {
      return value.replace(/&quot;/g, '"');
    }
    return value;
  });
};

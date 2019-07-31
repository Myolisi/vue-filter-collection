export const capitalize = Vue => {
  Vue.filter("capitalize", (value, options) => {
    if (!value) return;
    return capitalize(value, options);
  });

  Vue.prototype.$capitalize = (value, options) => {
    return capitalize(value, options);
  };

  function capitalize(value, options) {
    if (value && isNaN(value)) {
      if (options == "first") {
        value = value.split(" ");
        for (var i = 0; i < value.length; i++) {
          value[i] = value[i][0].toUpperCase() + value[i].substr(1);
        }
        return value.join(" ");
      } else if (!options) {
        return value.toUpperCase();
      }
    }
    return value;
  }
};

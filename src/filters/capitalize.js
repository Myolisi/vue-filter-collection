export const capitalize = Vue => {
  Vue.filter("capitalize", value => {
    if (!value) return;
    return capitalize(value);
  });

  Vue.prototype.$capitalize = value => {
    return capitalize(value);
  };

  function capitalize(value) {
    if (value && isNaN(value)) {
      value = value.split(" ");

      for (var i = 0; i < value.length; i++) {
        value[i] = value[i][0].toUpperCase() + value[i].substr(1);
      }

      return value.join(" ");
    }
    return value;
  }
};

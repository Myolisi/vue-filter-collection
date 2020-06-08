export const replaceAll = (Vue) => {
  Vue.filter('replaceAll', (value, replaceThis, withThis) => {
    if (!value) return;
    return replaceAll(value, replaceThis, withThis);
  });

  Vue.prototype.$replaceAll = (value, replaceThis, withThis) => {
    return replaceAll(value, replaceThis, withThis);
  };

  function replaceAll(value, replaceThis, withThis) {
    if (value && isNaN(value)) {
      const regex = RegExp(replaceThis, 'gi');
      const newValue = value.replace(regex, withThis);
      return newValue;
    } else {
      return value;
    }
  }
};

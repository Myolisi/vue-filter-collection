export default function capitalize(value) {
  if (value && isNaN(value)) {
    value = value.split(" ");

    for (var i = 0; i < value.length; i++) {
      value[i] = value[i][0].toUpperCase() + value[i].substr(1);
    }

    return value.join(" ");
  }
  return value;
}

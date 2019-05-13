export default function camelcase(value) {
  if (value && isNaN(value)) {
    const splitValue = value.split(/(?=[A-Z])|([0-9]+)/).join(" ");
    const val = value.charAt(0).toUpperCase() + splitValue.substring(1);
    // remove multiple spaces
    return val.replace(/  +/g, " ");
  } else {
    return value;
  }
}

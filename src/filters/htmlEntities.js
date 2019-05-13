export default function htmlEntities(value) {
  if (value && isNaN(value)) {
    return value.replace(/&quot;/g, '"');
  }
  return value;
}

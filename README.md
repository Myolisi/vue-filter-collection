# vue-filters-collection

##Description
vue-filters-collection is a collection of filters that help transform strings and dates. the following is a list of all the aavailable filters

```
camelcasToReadable - transforms a camelcase string to a readable string e.g JamesMay will be James May
capitalize - transforms the first letter of in a string to a capital letter e.g james may will be James May
htmlEntities - converts all html entites to readable characters eg &quot; will be " : a quote
```

## To install

```
npm install vue-filters-collection
or
yarn add vue-filters-collection
```

## Examples

```javascript
<template>
  <div id="app">
    <div>{{username | capitalize}}</div> //James May
    <div>{{entities | htmlEntities}}</div> //Hello "james" may
    <div>{{bestSaying | camelcase}}</div> //Asta Lavista Baby
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      username: "james may",
      entities: "Hello &quot;james&quot; may",
      bestSaying: "astaLavistaBaby"
    };
  }
};
</script>
```

## Note!

- The package is still in its beta version i.e there's a lot of functionality to be added
- Need to add more html entities See [ASCII Characters (Printable)](https://www.freeformatter.com/).
- Need to add more filters
- Add package to a repository

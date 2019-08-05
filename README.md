# vue-filters-collection :boom:

vue-filters-collection is a collection of filters that help transform/convert strings in a more convenient way. the following is a list of all the available filters (_For now_)

- `camelcasToReadable` - Will converts a camelcase string to a readable string JamesMay will be James May

- `capitalize` - takes an argument, _first_ capitalizies the first character/s in a string. eg james may will be James May
  if no argument is passed the whole string will be converted to uppercase e.g james may will be JAMES MAY

- `decapitalize` - converts the whole string to small letters.

- `htmlEntities` - substitutes &quot; htmlentity with a double quote.

see vuejs codesandbox: [vuejs-filters](https://dev.w3.org/html5/html-author/charref). </br> see nuxtjs codesandbox: [vuejs-filters](https://codesandbox.io/s/codesandbox-nuxt-nobes).

### To install

```
npm install vue-filters-collection
or
yarn add vue-filters-collection
```

### Load the plugin to your project

```javascript
import Vue from 'vue';
import vueFiltersCollection from 'vue-filters-collection';

Vue.use(vueFiltersCollection);
```

### Examples

```javascript
<template>
  <div id="app">
    <div>{{pCapitalize | capitalize}}</div> //JAMES MAY
    <div>{{pCapitalize | capitalize('first')}}</div> //Jame May

    <div>{{pDecapitalize | decapitalize}}</div> //james may
    <div>{{pEntities | htmlEntities}}</div> //Hello "james" may
    <div>{{pCamelcase | camelcase}}</div> //Asta Lavista Baby
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      pCapitalize: "james may",
      pDecapitalize: "JAMES MAY",
      pEntities: "Hello &quot;james&quot; may",
      pCamelcase: "astaLavistaBaby"
    };
  }
};
</script>
```

### How to use these vuejs filters in your script (code)

```javascript

doTheBoogie(){
     console.log(this.$options.filters.capitalize(this.pCapitalize)); //JAMES MAY
     //or
     console.log(this.$capitalize("james"));
     // ......
}

```

### Note!

- Need to add more html entities See [ASCII Characters (Printable)](https://dev.w3.org/html5/html-author/charref).
- Need to add more filters
- Add tests

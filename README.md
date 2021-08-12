# vue-filters-collection :boom:

## codesandbox example: [vuejs-filters](https://codesandbox.io/s/codesandbox-nuxt-forked-hbbj2?file=/pages/index.vue:0-1672).

vue-filters-collection is a collection of filters that help transform/convert strings in a more convenient way. the following is a list of all the available filters (_For now_)

- `camelcasToReadable` - Will converts a camelcase string to a readable string JamesMay will be James May

- `capitalize` - takes an argument, _first_ capitalizies the first character/s in a string. eg james may will be James May
  if no argument is passed the whole string will be converted to uppercase e.g james may will be JAMES MAY

- `decapitalize` - converts the whole string to small letters.

- `htmlEntities` - substitutes &quot; htmlentity with a double quote.

- `replaceAll` - finds and replace all occurrences for a single string.

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
    <div>{{ pCapitalize | capitalize }}</div>
    //JAMES MAY
    <div>{{ pCapitalize | capitalize("first") }}</div>
    //Jame May

    <div>{{ pDecapitalize | decapitalize }}</div>
    //james may
    <div>{{ pEntities | htmlEntities }}</div>
    //Hello "james" may
    <div>{{ pCamelcase | camelcase }}</div>
    //Asta Lavista Baby

    <div>
      {{ pReplaceAll }} :{{ pReplaceAll | replaceAll("this", "that") }} -
      replace all
    </div>
    //that is not a thattle, that is a cactus

    <div v-for="key in entities" :key="key">
      <h3>
        {{ key }} --------------
        <span class="ent">{{ key | htmlEntities }}</span>
      </h3>
    </div>
    {{ pEntities }} :{{ pEntities | htmlEntities }} - htmlEntities
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
      pCamelcase: "astaLavistaBaby",
      pReplaceAll: "This is not a thistle, THIS is a cactus",

      //new html entities
      entities: {
        quo: "&quot; or &#34;",
        excla: "&excl; or &#33;",
        hash: "&num; or &#35;",
        dolle: "&dollar; or &#36;",
        perc: "&percnt; or &#37;",
        amp: "&amp; or &#38;",
        apo: "&apos; or &#39;",
        lpar: "&lpar; or &#40;",
        rpar: "&rpar; or &#41;",
        ast: "&ast; or &#42;",
        commat: "&&commat; or &#64;",
        space: "&nbsp; or &#160;",
        copy: "&copy; or &#169;",
        pound: "&pound; or &#163;",
        euro: "&euro; or &#8364;",
        micro: "&micro; or &#181;",
      },
    };
  },
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

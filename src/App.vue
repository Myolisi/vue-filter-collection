<template>
  <div id="app">
    <div>{{pCapitalize | capitalize}}</div> //JAMES MAY
    <div>{{pCapitalize | capitalize('first')}}</div> //Jame May
 
    <div>{{pDecapitalize | decapitalize}}</div> //james may
    <div>{{pEntities | htmlEntities}}</div> //Hello "james" may
    <div>{{pCamelcase | camelcase}}</div> //Asta Lavista Baby
 
    <div>{{pReplaceAll}} :{{pReplaceAll | replaceAll('this', 'that')}} - replace all</div> //that is not a thattle, that is a cactus
 
    <div v-for="(key) in entities" :key="key">
      <h3>
        {{key}} --------------
        <span class="ent">{{key | htmlEntities}}</span>
      </h3>
    </div>
    {{pEntities}} :{{pEntities | htmlEntities}} - htmlEntities
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
        micro: "&micro; or &#181;"
      }
    }
  },
  mounted() {
    // console.log(this.$options.filters);
    console.log(this.$options.filters.capitalize(this.pCapitalize)); //JAMES MAY
    console.log(this.$options.filters.capitalize(this.pCapitalize, "first")); //Jame May
  }
};
</script>
<style>
.operation,
.old {
  margin-right: 30px;
}
.ent {
  color: red;
}
</style>

<template>
  <div id="app">
    <div>{{username | capitalize}}</div>
    <div>{{entities | htmlEntities}}</div>
    <div>{{bestSaying | camelcase}}</div>
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

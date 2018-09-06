<template>
  <div class="container">
    <h1 class="text-success">Hello, {{ msg }}! 123</h1>
    <p class="green">this is Vue.js</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Vue',
    };
  },
}
</script>

<style>
.green {
  color: green;
}
</style>

<template>
  <div class="container">
    <h1 class="text-success">Hello, {{ msg }}! 12345</h1>
    <p class="green">this is Vue.js</p>
    <AppNavbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
  data() {
    return {
      msg: 'Vue',
    };
  },
};
</script>

<style>
.green {
  color: green;
}
</style>

<template>
  <Header />
</template>

<script>
import api from './services/api';
import Header from './components/Header.vue';

console.log(api);

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
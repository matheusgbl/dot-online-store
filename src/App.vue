<template>
  <Header />
  <Card />
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';

export default {
  name: 'App',
  components: {
    Header,
    Card,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
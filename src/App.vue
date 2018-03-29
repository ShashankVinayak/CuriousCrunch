<template>
  <div class="gamestore-app">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Content from './components/Content';

export default {
  name: 'App',
  components: {
    Navbar,
    Content
  }
};
</script>

<style>

</style>

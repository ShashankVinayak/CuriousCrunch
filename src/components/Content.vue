<template>
  <div class="app-content">
    <div class="container-fluid">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from './Home/Main';

export default {
  name: 'Content',
  components: {
    Home
  }
};
</script>

<style scoped>
.app-content {
  margin-top: 3.25rem;
}
</style>



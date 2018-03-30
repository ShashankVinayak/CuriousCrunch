<template>
  <div class="app-content">
    <div class="container-fluid">
      <!-- <Home /> -->
      <!-- <About /> -->
      <!-- <CardDetail /> -->
      <!-- <Contact /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style scoped>
.app-content {
  margin-top: 3.25rem;
}
</style>



<template>
  <div class="app-content">
    <div class="container-fluid">
      <!-- <Home /> -->
      <!-- <About /> -->
      <!-- <CardDetail /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./Home/Main";
import About from "./About/Main";
import CardDetail from "./CardDetail/Main";

export default {
  name: "Content",
  components: {
    Home,
    About,
    CardDetail
  }
};
</script>

<style scoped>
.app-content {
  margin-top: 3.25rem;
}
</style>



<template>
  <section class="app-home">
    <Banner />
    <CardList />
  </section>
</template>

<script>
import Banner from "./Banner";
import CardList from "./CardList";

export default {
  name: "Home",
  components: {
    Banner,
    CardList
  }
};
</script>

<style>

</style>



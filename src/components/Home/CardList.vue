<template>
  <section class="app-cardlist">
    <div class="columns is-mobile is-multiline is-gapless">
      <div class="column is-6-mobile is-4-tablet is-3-widescreen" v-for="(game, index) in games" v-bind:key="index">
        <Card v-bind:game="game" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardList",
  components: {
    Card
  },
  computed: {
    games() {
      return this.$store.getters.sortByRating;
    }
  },
  created() {
    this.$store.dispatch("fetchGames");
  }
};
</script>

<style>
.app-cardlist {
  padding: 0.5rem;
}
</style>


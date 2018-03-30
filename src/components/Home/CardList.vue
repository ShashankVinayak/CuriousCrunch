<template>
  <section class="app-cardlist">
    <div class="columns is-mobile is-multiline is-gapless">
      <div class="column is-6-mobile is-4-tablet is-3-widescreen" v-for="(item, index) in cardList" v-bind:key="index">
        <Card />
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
  data(){
    return {
      cardList: [0]
    }
  }
}
</script>

<style>
.app-cardlist {
  padding: 0.5rem;
}
</style>


<template>
  <article class="app-card-detail">
    <div class="columns is-centered">
      <div class="column is-6-desktop">

        <!-- Image -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img :src="'../../../static/' + gameName + 'Detail.jpg'" :alt="gameName + 'Detail'">
            </figure>
          </div>
        </div>

        <!-- App info -->
        <Info />

        <!-- App Description -->
        <Description />
        
      </div>
    </div>

  </article>
</template>

<script>
import Info from "./Info";
import Description from "./Description";

export default {
  name: "CardDetail",
  data(){
    return {
      gameName: this.$route.params.name
    }
  },
  components: {
    Info,
    Description
  },
  created(){
    this.$store.dispatch('fetchGamesDetail',this.gameName);
  }
};
</script>

<style>
.app-card-detail {
  padding: 1rem;
}

.app-no-padding {
  padding: 0;
}

.app-info {
  padding: 0.5rem;
}

.level-info {
  padding: 1rem 0 1rem 0.5rem;
}
</style>



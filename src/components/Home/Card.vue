<template>
  <article class="app-card">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <!-- <router-link :to="{ name: 'carddetail', params: { id: game.name } }"> -->
          <router-link :to="'/'+game.name">
            <img :src="'../../../static/images/'+game.name+'.jpg'" :alt="game.name">
          </router-link>
        </figure>
      </div>

      <div class="card-content app-card-content">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <h1 class="is-size-6">{{game.name}}</h1>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item">
              <h2 class="is-size-7">&#x2B50; {{game.rating}}</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: ["game"]
};
</script>

<style>
.app-card {
  padding: 0.5rem;
}

.image {
  background-image: linear-gradient(
    141deg,
    #ff0561 0,
    #ff3860 71%,
    #ff5257 100%
  );
}
.app-card-content {
  padding: 0.5rem 1rem;
}
</style>



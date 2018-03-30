<template>
  <article class="app-card-detail">
    <div class="columns">
      <div class="column app-no-padding is-3-desktop"></div>
      <div class="column is-6-desktop">

        <!-- Image -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-16by9">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
        </div>

        <!-- App info -->
        <Info />

        <!-- App Description -->
        <Description />
        
      </div>
      <div class="column app-no-padding is-3-desktop"></div>
    </div>

  </article>
</template>

<script>
import Info from "./Info";
import Description from "./Description";

export default {
  name: "CardDetail",
  components: {
    Info,
    Description
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



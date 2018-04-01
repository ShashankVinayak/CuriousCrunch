<template>
  <div class="app-info">
    <div class="level-info">
      <p class="is-size-6 has-text-left">
        {{getGameDescription}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  computed: {
    getGameDescription() {
      return this.$store.getters.getGameDescription;
    }
  }
};
</script>

<style>

</style>



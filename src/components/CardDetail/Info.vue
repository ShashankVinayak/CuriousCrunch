<template>
  <div class="app-info">
    <div class="level-info">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="is-size-3">
              <strong>
                {{ getGameName }}
              </strong>
            </p>
          </div>
        </div>

        <div class="level-right">
          <p class="level-item">
            <a :href="getGameDownloadURL" class="button is-success" target="_blank">&#x1F4E5; Download</a>
          </p>
        </div>
      </div>
    </div>

    <div class="level-info">
      <div class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-6">
              <strong>&#x1F4E5; Downloads</strong>
            </p>
            <p class="is-size-5">{{getGameDownloads}}+</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-6">
              <strong>&#x2B50; Rating</strong>
            </p>
            <p class="is-size-5">{{getGameRating}}</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-6">
              <strong>&#x1F4E6; Size</strong>
            </p>
            <p class="is-size-5">{{getGameSize}}M</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Info",
  computed: {
    getGameName() {
      return this.$store.getters.getGameName;
    },
    getGameDownloadURL() {
      return this.$store.getters.getGameDownloadURL;
    },
    getGameDownloads() {
      return this.$store.getters.getGameDownloads;
    },
    getGameRating() {
      return this.$store.getters.getGameRating;
    },
    getGameSize() {
      return this.$store.getters.getGameSize;
    }
  }
};
</script>

<style>

</style>

<template>
  <div class="app-info">
    <div class="level-info">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <p class="is-size-3">
              <strong>
                {{ $route.params.id }}
              </strong>
            </p>
          </div>
        </div>

        <div class="level-right">
          <p class="level-item">
            <button class="button is-success is-medium">Install</button>
          </p>
        </div>
      </div>
    </div>

    <div class="level-info">
      <div class="level is-mobile">
        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-6">
              <strong>Downloads</strong>
            </p>
            <p class="is-size-5">250+</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-6">
              <strong>Rating</strong>
            </p>
            <p class="is-size-5">4.3</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="is-size-6">
              <strong>Size</strong>
            </p>
            <p class="is-size-5">30mb</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Info"
}
</script>

<style>

</style>

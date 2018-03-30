<template>
  <section class="app-about">
    <header class="app-about-header">
      <h1 class="is-size-1 has-text-centered has-text-danger">Who are we? &#x1F914;</h1>
    </header>
    <main>
      <div class="columns">
        <div class="column app-no-padding is-2"></div>
        <div class="column is-8">
          <div class="content app-about-content">
            <p class="is-size-5 has-text-justified has-text-grey-darker">We are couple of guys (3 to be exact) who are trying to make the world a better..... just kidding &#x1F609;</p>
            <p class="is-size-5 has-text-justified has-text-grey-darker">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
        <div class="column app-no-padding is-2"></div>
      </div>
    </main>
  </section>
</template>


<script>
export default {
  name: "About"
}
</script>

<style>
.app-about-header {
  padding: 2rem 0;
}

.app-about-content {
  padding: 1rem 2rem;
}
</style>


<template>
  <section class="app-contact">
    <header class="app-contact-header">
      <h1 class="is-size-1 has-text-centered has-text-danger">Get in Touch</h1>
    </header>
    <main>
      <div class="columns">
        <div class="column app-no-padding is-4"></div>
        <div class="column is-4">
          <div class="content app-contact-content">
            <p class="is-size-6 has-text-justified has-text-grey-darker">
              Mail us at:
              <a href="mailto:official.curiouscrunch@gmail.com">official.curiouscrunch@gmail.com</a>
            </p>
            <p class="is-size-6 has-text-justified has-text-grey-darker">
              Follow us on twitter:
              <a href="https://twitter.com/curiouscrunch">@CuriousCrunch</a>
            </p>
            <p class="is-size-6 has-text-justified has-text-grey-darker">
              Like us on facebook:
              <a href="https://www.facebook.com/CuriousCrunch/">CuriousCrunch</a>
            </p>
          </div>
        </div>
        <div class="column app-no-padding is-4"></div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style>
.app-contact-header {
  padding: 2rem 0;
}

.app-contact-content {
  padding: 1rem 2rem;
}
</style>


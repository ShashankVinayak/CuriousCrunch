<template>
  <section class="app-contact">
    <header class="app-contact-header">
      <h1 class="is-size-1 has-text-centered has-text-danger">Get in Touch</h1>
    </header>
    <main>
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="content app-contact-content">
            <p class="is-size-6 is-size-5-desktop is-size-4-widescreen has-text-centered has-text-grey-darker">
              Mail us at:
              <a href="mailto:official.curiouscrunch@gmail.com">official.curiouscrunch@gmail.com</a>
            </p>
            <p class="is-size-6 is-size-5-desktop is-size-4-widescreen has-text-centered has-text-grey-darker">
              Follow us on twitter:
              <a href="https://twitter.com/curiouscrunch" target="_blank">@CuriousCrunch</a>
            </p>
            <p class="is-size-6 is-size-5-desktop is-size-4-widescreen has-text-centered has-text-grey-darker">
              Like us on facebook:
              <a href="https://www.facebook.com/CuriousCrunch/" target="_blank">CuriousCrunch</a>
            </p>
          </div>
        </div>
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


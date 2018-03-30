<template>
  <section class="hero is-danger is-bold">
    <div class="hero-body app-hero-is-small">
      <div class="container">
        <h1 class="title">
          Good {{timeOfDay}}
        </h1>
        <h2 class="subtitle">
          Gamer
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      timeOfDay: "Day"
    };
  },
  methods: {
    setTimeOfDay() {
      let time = new Date().getHours();
      switch (true) {
        case time >= 6 && time < 12:
          this.timeOfDay = "Morning";
          break;
        case time >= 12 && time < 16:
          this.timeOfDay = "Afternoon";
          break;
        case time >= 16 && time < 21:
          this.timeOfDay = "Evening";
          break;
        default:
          this.timeOfDay = "Day";
      }
    }
  },
  mounted() {
    this.setTimeOfDay();
  }
};
</script>

<style>
.app-hero-is-small {
  padding: 2rem 1.5rem;
}
</style>



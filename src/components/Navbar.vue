<template>
  <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
    <!-- navbar-brand begin -->
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" alt="CuriousCrunch" width="35" height="50">
        <p>CuriousCrunch</p>
      </router-link>
      <div class="navbar-burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- navbar-brand end -->

    <!-- navbar-menu begin -->
    <div class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <router-link to="/" class="navbar-item" @click.native="toggleMenu">
          Home
        </router-link>
        <router-link to="/about" class="navbar-item" @click.native="toggleMenu">
          About
        </router-link>
        <router-link to="/contact" class="navbar-item" @click.native="toggleMenu">
          Contact
        </router-link>
      </div>
    </div>
    <!-- navbar-menu end -->
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleMenu() {
      document
        .getElementsByClassName("navbar-menu")[0]
        .classList.toggle("is-active");
      document
        .getElementsByClassName("navbar-burger")[0]
        .classList.toggle("is-active");
    }
  }
};
</script>



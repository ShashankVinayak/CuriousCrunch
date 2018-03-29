<template>
  <nav class="navbar is-fixed-top is-warning" role="navigation" aria-label="main navigation">
    <!-- navbar-brand begin -->
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="../assets/logo.png" alt="CuriousCrunch" width="35" height="50">
        <p>CuriosCrunch</p>
      </a>
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
        <a class="navbar-item" href="#">
          Home
        </a>
        <a class="navbar-item" href="#">
          About
        </a>
        <a class="navbar-item" href="#">
          Contact Us
        </a>
      </div>
    </div>
    <!-- navbar-menu end -->
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleMenu(){
      document.getElementsByClassName('navbar-menu')[0].classList.toggle('is-active');
      document.getElementsByClassName('navbar-burger')[0].classList.toggle('is-active');
    }
  }
}
</script>


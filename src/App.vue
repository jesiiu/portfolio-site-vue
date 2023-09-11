<script setup>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Nav from './components/Nav.vue';
import Experience from './components/Experience.vue';
import Portfolio from './components/Portfolio.vue';
</script>

<template>
  <Header />
  <About />
  <Nav />
  <Experience />
  <Portfolio />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
@import './assets/scss/variables.scss';

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}

body {
  font-family: 'Poppins', sans-serif;
  background: $color-bg;
  color: $color-white;
  line-height: 1.7;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 500;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 3rem;
}

h5 {
  font-size: 1.2rem;
}

.container {
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 5rem;
  width: $container-width-lg;
}
.text-light {
  color: $color-light;
}
.btn {
  border: 1px solid $color-primary;
  border-radius: 0.4rem;
  color: $color-primary;
  cursor: pointer;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  transition: $transition;
  width: max-content;

  &:hover {
    background: $color-white;
    color: $color-bg;
    border-color: transparent;
  }
}
.btn-primary {
  background: $color-primary;
  color: $color-bg;
}

img {
  display: block;
  object-fit: cover;
  width: 110%;
  height: 105%;
}

@media screen and (max-width: 1024px) {
    .container {
        width: $container-width-md;
    }
}

@media screen and (max-width: 600px) {
    .container {
        width: $container-width-sm;
    }
}
</style>

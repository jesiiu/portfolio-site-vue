<script setup></script>
<template>
  <header>
    <div class="container header__container">
      <h5>Cześć, nazywam się</h5>
      <h2>Kacper Jess</h2>
      <h5 class="text-light">Junior Developer</h5>
      <div class="header__cta">
        <a class="btn">Moje CV</a>
        <a href="#" class="btn btn-primary">Porozmawiajmy</a>
      </div>
      <div class="header__socials">
        <a v-for="(socialItem, index) in socials" :key="index" :href="socialItem.link">
          <v-icon :name="socialItem.icon" scale="1.4" />
        </a>
      </div>
      <div class="header__me">
        <img :src="imageUrl" alt="Picture" class="header__me-picture"/>
      </div>
      <a href="#" class="header__scroll-down">Scroll down</a>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';

header {
  height: 100vh;
  overflow: hidden;
}
.header__container {
  height: 100%;
  position: relative;
  text-align: center;
}
.header__cta {
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 2.5rem;
}
.header__socials {
  align-items: center;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  gap: 0.8rem;
  left: 0;
  position: absolute;

  &::after {
    content: '';
    width: 1px;
    height: 2rem;
    background: $color-primary;
  }

  svg {
    fill: $color-primary;
    transition: $transition;

    &:hover {
      fill: $color-white;
    }
  }
}

.header__me {
  height: 33rem;
  width: 22rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  overflow: hidden;
  border-radius: 2rem;
}

.header__scroll-down {
  bottom: 5rem;
  font-size: 0.9rem;
  font-weight: 400;
  position: absolute;
  transform: rotate(90deg);
  right: -2.3rem;
  color: $color-primary;
}

@media screen and (max-width: 1200px) {
  .about__container {
    gap: 6%;
  }
}

@media screen and (max-width: 1024px) {
  #about {
    height: max-content;
  }
  .about__container {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
}

@media screen and (max-width: 662px) {
  .about__me-cards {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 662px) {
  .header__me{
    width: 16rem;
    height: 33rem;
    left: calc(50% - 8rem);
  }
}
</style>

<script>
export default {
  data() {
    return {
      imageUrl: 'src/assets/img/1.webp',
      socials : [
        {
          icon: "bi-linkedin",
          link: ""
        },
        {
          icon: "bi-github",
          link: ""
        },
        {
          icon: "fa-facebook-messenger",
          link: ""
        },
      ]
    }
  }
}
</script>

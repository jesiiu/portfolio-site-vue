<script setup></script>
<template>
  <section id="portfolio">
    <h5>Moje prace</h5>
    <h2>Portfolio</h2>
    <div class="container portfolio__container">
      <div class="portfolio__cards">
        <div class="portfolio__card" v-for="(item, index) in projects" :key="index">
          <img :src="item.img" :alt="item.alt" />
          <div class="portfolio__card-description">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
#portfolio {
  height: max-content !important;
  width: 100%;
}
.portfolio__cards {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.portfolio__card {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: inline-block;

  img {
    object-fit: cover;
    height: 30rem;
    width: 100%;
    padding: 2rem;
    aspect-ratio: 1/1;
    border-radius: 3.5rem;
  }
}
.portfolio__card-description {
  position: absolute;
  top: 50px;
  left: 50px;
  background: rgba(0, 0, 0, 0.562);
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  padding: 1rem;
  border-radius: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      projects: [
        {
          img: 'src/assets/img/3.webp',
          alt: 'Project 1',
          title: 'Project 1',
          description: '',
          stack: ''
        },
        {
          img: 'src/assets/img/3.webp',
          alt: 'Project 1',
          title: '',
          description: '',
          stack: ''
        },
        {
          img: 'src/assets/img/3.webp',
          alt: 'Project 1',
          title: '',
          description: '',
          stack: ''
        },
        {
          img: 'src/assets/img/3.webp',
          alt: 'Project 1',
          title: '',
          description: '',
          stack: ''
        }
      ]
    }
  }
}
</script>

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
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <div class="portfolio__card-techstack">
              <router-link :to="item.github"><v-icon name="bi-github" /></router-link>
              <small>{{  item.stack }}</small>
            </div>
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
  justify-content: center;
  align-items: center;
  height: 100%;
}
.portfolio__card {
  width: 75%;
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
  background: rgba(0, 0, 0, 0.603);
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  padding: 1rem;
  border-radius: 5px;
}
.portfolio__card-techstack {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding-top: 2rem;
}
</style>
<script>
export default {
  data() {
    return {
      projects: [
        {
          img: 'src/assets/img/3.webp',
          alt: 'OrdersHub',
          title: 'OrdersHub',
          description: 'Aplikacja agragująca zamówienia pobierane z różnych platform sprzedażowych, w tym z Baselinkera. Pozwala to na optymalizację czasu realizacji oraz wysyłki zamówienia dla wielu platform a to przekłada się na lepsze opinie sklepu oraz zwiększenie sprzedaży. Aplikacja pozwala na podpięcie kilku magazynów które zamówienia mogą obsługiwać, zarezerwować zamówienie przez wybrany magazyn, tworzyć dokument sprzedażowy, pobrać etykietę wysyłkową dla zamówienia oraz zmienić status na platformie.',
          github: '',
          stack: 'LARAVEL RESTAPI PGSQL'
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

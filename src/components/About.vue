<script setup></script>
<template>
  <section id="about">
    <h5>Kilka słów</h5>
    <h2>O mnie</h2>
    <div class="container about__container">
      <div class="about__me">
        <div class="about__me-image">
          <img :src="imageUrl" alt="Picture" />
        </div>
      </div>
      <div class="about__content">
        <div class="about__me-cards">
          <article class="about__card" v-for="(card, index) in cards" :key="index">
            <v-icon :name="card.icon" scale="1.4" />
            <h5>{{ card.title }}</h5>
            <small> {{ card.subtitle }}</small>
          </article>
        </div>
        <div class="about__me-description">
          <p>
            {{ description }}
          </p>
        </div>
        <a href="#" class="btn btn-primary">Porozmawiajmy</a>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@import '../assets/scss/variables.scss';
#about {
  height: 100vh;
}

.about__container {
  display: grid;
  gap: 15%;
  grid-template-columns: 35% 50%;
}

.about__me {
  aspect-ratio: 1/1;
  background: $color-bg-variant;
  border-radius: 20px;
  display: grid;
  width: 100%;
}
.about__me-image {
  border-radius: 20px;
  overflow: hidden;
  transform: rotate(-10deg);
  transition: $transition;

  &:hover {
    transform: rotate(0deg);
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
  }
}
.about__me-cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
}
.about__card {
  background: $color-bg-variant;
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: $transition;

  &:hover {
    background: transparent;
    border-color: $color-light;
    cursor: default;
  }
}
.about__me-description {
  width: 100%;
  height: max-content;
  padding: 0.5rem;
  border: 1px solid $color-light;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 15px;

  p {
    padding: 0.8rem;
    color: $color-white;
    font-size: 1rem;
    font-weight: 500;
  }
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
  .about__me{
    display: flex;
    justify-content: center;
  }
  .about__me-cards {
    display: flex;
    flex-direction: column;
  }
  .about__me-image {
  border-radius: 20px;
  transform: rotate(0deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      imageUrl: 'src/assets/img/second-image.webp',
      cards: [
        {
          icon: 'bi-clipboard-data-fill',
          title: 'Doświadczenie',
          subtitle: '1.5 roku doświadczenia komercyjnego'
        },
        {
          icon: 'ai-stackoverflow-square',
          title: 'Projekty',
          subtitle: '15+ ukończonych projektów'
        },
        {
          icon: 'bi-terminal-fill',
          title: 'Aktualnie',
          subtitle: 'Projekty w toku'
        }
      ],
      description:
        'W lipcu 2023 roku ukończyłem studia na Uniwersytecie Merito w Poznaniu, zdobywając tytuł inżyniera Informatyki w specjalizacji e-commerce.  ' +
        "Obecnie zawodowo specjalizuję się w tworzeniu aplikacji backend'owych w językach C#, Python pozwalających na automatyzację oraz optymalizację procesów biznesowych." +
        "Jestem równiez zaznajomiony w tworzeniu aplikacji fullstack'owych do których wykorzystałem framework Laravel języka PHP oraz framework Vue do stworzenia frontend'u aplikacji. "
    }
  }
}
</script>

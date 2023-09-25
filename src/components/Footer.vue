<script setup></script>

<template>
  <footer>
    <a href="#" class="footer__logo">KACPER JESS</a>
    <ul class="permalinks">
      <li v-for="(link, index) in permalinks" :key="index">
        <a :href="link.destiny"> {{ link.name }} </a>
      </li>
    </ul>
    <div class="footer__copyright">
      <small>© Created by Kacper Jess</small>
    </div>
  </footer>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
footer {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background: $color-primary;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 3rem;
  color: $color-white;
  text-decoration: none;
}
.footer__logo {
  font-size: 2.4rem;
  font-weight: 500;
  color: $color-bg;
  transition: $transition;
  &:hover {
    color: $color-white;
  }
}
.permalinks {
  li {
    display: inline-block;
    padding: 2rem;
    a {
      color: $color-white;
      transition: $transition;
      &:hover {
        color: $color-bg;
      }
    }
  }
}
.footer__copyright {
  display: block;
  margin-top: auto;
  margin-bottom: 5rem;
}

@media screen and (max-width: 775px) {
.permalinks {
    li {
        display: block;
        padding: .5rem;
    }
}

}
</style>
<script>
export default {
  data() {
    return {
      permalinks: [
        {
          name: 'Start',
          destiny: '#'
        },
        {
          name: 'O Mnie',
          destiny: '#about'
        },
        {
          name: 'Doświadczenie',
          destiny: '#experience'
        },
        {
          name: 'Portfolio',
          destiny: '#portfolio'
        },
        {
          name: 'Kontakt',
          destiny: '#contact'
        }
      ],
      socials: [
        {
          link: '',
          icon: ''
        },
        {
          link: '',
          icon: ''
        },
        {
          link: '',
          icon: ''
        }
      ]
    }
  }
}
</script>

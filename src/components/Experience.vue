<script setup></script>

<template>
  <section id="experience">
    <h5>Tech Stack</h5>
    <h2>Moje umiejętności</h2>
    <div class="container experience__container">
      <div class="experience__frontend">
        <h3 class="experience__frontend-title">Frontend Stack</h3>
        <div class="experience__content">
          <article class="experience__detail" v-for="(item, index) in frontendItems" :key="index">
            <v-icon :name="item.icon" scale="3" />
            <small>{{ item.name }}</small>
          </article>
        </div>
      </div>
      <div class="experience__backend">
        <h3 class="experience__backend-title">Backend Stack</h3>
        <div class="experience__content">
        <article class="experience__detail" v-for="(item, index) in backendItems" :key="index">
          <v-icon :name="item.icon" scale="3" />
          <small>{{ item.name }}</small>
        </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
.experience__container {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
.experience__frontend-title,
.experience__backend-title {
  text-align: center;
  font-size: 1.8rem;
}
.experience__frontend,
.experience__backend {
  background: $color-bg-variant;
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 2.4rem 5rem;
  transition: $transition;
  &:hover{
    background: transparent;
    border-color: white;
  }
}
.experience__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
}
.experience__detail {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  small {
    font-size: 1.1rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
        frontendItems: [
            {
                icon: 'vi-file-type-html',
                name: 'HTML'
            },
            {
                icon: 'vi-file-type-scss2',
                name: 'SCSS'
            },
            {
                icon: 'vi-file-type-js-official',
                name: 'JS'
            },
            {
                icon: 'vi-file-type-vue',
                name: 'Vue'
            },
        ],
        backendItems: [
            {
                icon: 'vi-file-type-csharp2',
                name: 'C#'
            },
            {
                icon: 'vi-file-type-python',
                name: 'Python'
            },
            {
                icon: 'co-laravel',
                name: 'Laravel'
            },
            {
                icon: 'vi-file-type-pgsql',
                name: 'PGSQL'
            },
            {
                icon: 'si-microsoftsqlserver',
                name: 'MSSQL'
            },
            {
                icon: 'vi-file-type-nginx',
                name: 'Nginx'
            },
        ]
    }
  }
}
</script>

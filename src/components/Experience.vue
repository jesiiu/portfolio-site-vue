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
      <div class="experience__database">
        <h3 class="experience__database-title">Database</h3>
        <div class="experience__content">
          <article class="experience__detail" v-for="(item, index) in databaseItems" :key="index">
            <v-icon :name="item.icon" scale="3" />
            <small>{{ item.name }}</small>
          </article>
        </div>
      </div>
      <div class="experience__server">
        <h3 class="experience__server-title">Servers</h3>
        <div class="experience__content">
          <article class="experience__detail" v-for="(item, index) in serverItems" :key="index">
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

#experience {
  height: max-content !important;
}
.experience__container {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
.experience__frontend-title,
.experience__backend-title,
.experience__database-title,
.experience__server-title {
  text-align: center;
  font-size: 1.8rem;
}
.experience__frontend,
.experience__backend,
.experience__database,
.experience__server {
  background: $color-bg-variant;
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 2.4rem 5rem;
  transition: $transition;
  &:hover {
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
        }
      ],
      backendItems: [
        {
          icon: 'vi-file-type-csharp2',
          name: 'C#'
        },
        {
          icon: 'co-python',
          name: 'Python'
        },
        {
          icon: 'vi-file-type-php',
          name: 'PHP'
        },
        {
          icon: 'co-laravel',
          name: 'Laravel'
        },
        {
          icon: 'si-fastapi',
          name: 'REST/SOAP'
        },
        {
          icon: 'vi-file-type-xml',
          name: 'JSON/XML'
        }
      ],
      databaseItems: [
        {
          icon: 'vi-file-type-pgsql',
          name: 'PGSQL'
        },
        {
          icon: 'si-microsoftsqlserver',
          name: 'MSSQL'
        }
      ],
      serverItems: [
        {
          icon: 'vi-file-type-nginx',
          name: 'Nginx'
        },
        {
          icon: 'vi-file-type-apache',
          name: 'Apache'
        },
        {
          icon: 'fc-linux',
          name: 'Linux'
        }
      ]
    }
  }
}
</script>

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
              <a href="{{item.github}}"><v-icon name="bi-github" /></a>
              <div class="techstack">
                <small v-for="(stack, stackIndex) in item.stack" :key="stackIndex">{{
                  stack.name
                }}</small>
              </div>
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
  width: 85%;
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
  background: rgba(0, 0, 0, 0.774);
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  padding: 1rem;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.portfolio__card-techstack {
  position: relative;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  a {
    text-decoration: none;
    color: white;
  }
}
.techstack {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  margin-top: 0.4rem;
  width: 100%;
  justify-content: flex-start;
  align-content: center;
}
@media screen and (max-width: 1172px) {
  .portfolio__card {
    width: 100%;
  }
  .portfolio__card-description {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
    small {
      font-weight: 500;
      font-size: 0.75rem;
    }
  }
}
@media screen and (max-width: 727px) {
  .portfolio__container {
    width: 95% !important;
  }
  .portfolio__cards {
    width: 100%;
  }
}
@media screen and (max-width: 640px) {
  .portfolio__card-description {
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.85rem;
    }
    small {
      font-weight: 500;
      font-size: 0.7rem;
    }
  }
}
@media screen and (max-width: 527px) {
  .portfolio__card-description {
    h1 {
      font-size: 1rem;
    }
    p {
      font-size: 0.75rem;
    }
    small {
      font-weight: 500;
      font-size: 0.6rem;
    }
  }
}
@media screen and (max-width: 527px) {
  .portfolio__card-description {
    h1 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
    small {
      font-weight: 500;
      font-size: 0.5rem;
    }
  }
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
          description:
            'Aplikacja agregująca zamówienia pobierane z różnych platform sprzedażowych, w tym z Baselinkera. Pozwala to na optymalizację czasu realizacji zamówienia dla wielu platform co z kolei przekłada się na lepsze opinie oraz zwiększenie sprzedaży. Aplikacja umożliwia podpięcie kilku magazynów które zamówienia mogą obsługiwać, zarezerwować zamówienie przez wybrany magazyn, tworzyć dokument sprzedażowy, pobrać etykietę wysyłkową dla zamówienia oraz zmienić status na platformie.',
          github: '',
          stack: [
            {
              name: 'Laravel'
            },
            {
              name: 'PGSQL'
            },
            {
              name: 'RestAPI'
            },
            {
              name: "HTML/CSS/JS"
            }
          ]
        },
        {
          img: 'src/assets/img/4.webp',
          alt: 'Integracje ERP',
          title: 'Integracje ERP',
          description: 'Aplikacje przeznaczone do wymiany danych o produktach wraz z opisami, znajdujących się w systemie ERP, z platformami e-commerce w celu możliwości wystawienia aukcji sprzedażowych, aktualizacji cen oraz stanu magazynowego. Komunikacja odbywa się poprzez pobranie danych z bazy danych MSSQL lub PGSQL a następnie wysłanie ich przy użyciu dostarczonego przez target docelowy interfejsu API, ewentualnie poprzez plik JSON/XML/CSV. ',
          stack: [
            {
              name: "C#"
            },
            {
              name: "Python"
            },
            {
              name: "MSSQL"
            },
            {
              name: "PGSQL"
            },
            {
              name: "REST/SOAP API"
            }
          ]
        },
        {
          img: 'src/assets/img/5.webp',
          alt: 'Mniejsze projekty',
          title: 'Mniejsze projekty',
          description: 'Aplikacje optymalizujące procesy biznesowe oraz ułatwiające pracę pracownikom firmy. Ich działanie skupione jest na zmniejszeniu ilości wymaganych kroków do wykonania danego działania, eliminowanie powtarzania zbędnych czynności, docelowo pozwalające na większą automatyzację a co za tym idzie zwiększa się efektywnośc pracy.',
          stack: [
            {
              name: "C#"
            },
            {
              name: "Python"
            },
            {
              name: "MSSQL"
            },
            {
              name: "PGSQL"
            },
            {
              name: "PHP"
            },
            {
              name: "JSON/XML"
            }
          ]
        }
      ]
    }
  }
}
</script>

<script setup></script>

<template>
  <section id="contact">
    <h5>Zostańsmy w kontakcie</h5>
    <h2>Napisz do mnie</h2>
    <div class="container contact__container">
      <div class="contact__options">
        <article v-for="(option, index) in contactOptions" :key="index" class="contact__option">
          <v-icon :name="option.icon" scale="1.4" />
          <h4>{{ option.name }}</h4>
          <h5>{{ option.destiny }}</h5>
          <div class="contact__button-container">
            <a :href="option.extended" target="_blank" class="contact__button">Napisz do mnie</a>
          </div>
        </article>
      </div>
      <form ref="form" @submit.prevent="sendEmail">
        <input type="text" name="name" placeholder="Your name...." required />
        <input type="text" name="email" placeholder="Your email..." required />
        <textarea name="message" rows="7" placeholder="Your message..." required></textarea>
        <button type="submit" class="btn btn-primary">
          <v-icon v-if="isSending" name="pr-spinner" animation="spin" />
          <span v-else>Send message</span>
        </button>
      </form>
    </div>
  </section>
</template>
<style lang="scss">
@import '../assets/scss/variables.scss';
.contact__container {
  display: grid;
  gap: 12%;
  grid-template-columns: 30% 58%;
  width: 58%;
}
.contact__options {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.contact__option {
  background: $color-bg-variant;
  border: 1px solid transparent;
  border-radius: 1.2rem;
  padding: 1.2rem;
  text-align: center;
  transition: $transition;
  cursor: default;

  h5 {
    color: black;
    text-align: center;
    word-wrap: break-word;
    font-size: 1rem;
  }
  h4 {
    font-size: 1.1rem;
  }
}
.contact__button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem;
  transition: $transition;
  a {
    width: max-content;
    border: 1px solid transparent;
    border-radius: 15px;
    background: $color-bg;
    transition: $transition;
    &:hover {
      background: $color-white;
      color: black;
      border-color: $color-bg;
    }
  }
}
.contact__button {
  text-decoration: none;
  color: $color-white;
  font-size: 0.85rem;
  padding: 0.5rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  input,
  textarea {
    background: #e9e9e9;
    border: 1px solid $color-white;
    border-radius: 15px;
    color: $color-white;
    padding: 1rem;
    resize: none;
    width: 100%;
    color: black;
  }
  button {
    font-weight: 600;
    width: max-content;
    min-width: 150px;
  }
}
@media screen and (max-width: 775px) {
  .contact__container {
    width: 95% !important;
    grid-template-columns: unset;
    gap: 3rem;
  }
}
</style>
<script>
import emailjs from '@emailjs/browser'
export default {
  data() {
    return {
      contactOptions: [
        {
          name: 'Email',
          destiny: 'kacper.jess74@gmail.com',
          extended: 'mailto:kacper.jess74@gmail.com',
          icon: 'md-email'
        },
        {
          name: 'Messenger',
          destiny: 'm.me/kacper.jess.7',
          extended: 'https://m.me/kacper.jess.7',
          icon: 'fa-facebook-messenger'
        },
        {
          name: 'WhatsApp',
          destiny: '+48696921301',
          extended: 'https://api.whatsapp.com/send?phone=696921301',
          icon: 'ri-whatsapp-fill'
        }
      ],
      isSending: false
    }
  },
  methods: {
    sendEmail() {
      this.isSending = true
      emailjs
        .sendForm('service_v7l0ssx', 'template_8ai164n', this.$refs.form, '0NjInGgW08Tm_nwau')
        .then(
          () => {
            this.isSending = false
          },
          () => {
            this.isSending = false
          }
        )
    }
  }
}
</script>

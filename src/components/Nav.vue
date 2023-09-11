<script setup>

</script>

<template>
 <nav>
    <a @click="setActiveNav('#')" :class="{ active: activeNav === '#' }" href="#"><v-icon name="co-home" /></a>
    <a @click="setActiveNav('#about')" :class="{ active: activeNav === '#about' }" href="#about"><v-icon name="oi-person" /></a>
    <a @click="setActiveNav('#experience')" :class="{ active: activeNav === '#experience' }" href="#experience"><v-icon name="bi-book" /></a>
    <a @click="setActiveNav('#portfolio')" :class="{ active: activeNav === '#portfolio' }" href="#portfolio"><v-icon name="ri-git-branch-fill" /></a>
    <a @click="setActiveNav('#contact')" :class="{ active: activeNav === '#contact' }" href="#contact"><v-icon name="ri-message-line" /></a>
 </nav>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
nav {
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
}

nav a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: $color-light;
    font-size: 1.1rem;
}

nav a:hover {
    background: rgba(0, 0, 0, 0.3);
}

nav a.active {
    background: $color-primary;
    color: $color-bg;
}
</style>

<script>
export default {
    data() {
        return {
            activeNav: '#',
        };
    },
    methods: {
        setActiveNav(nav) {
            this.activeNav = nav;
        },
    },
}
</script>
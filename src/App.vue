<template>
  <div class="container column">
    <TheHeading />
    <AppDisplay />
  </div>

</template>

<script>
import TheHeading from './components/TheHeading.vue';
import AppDisplay from './components/AppDisplay.vue';

export default {
  name: 'App',
  components: {
    TheHeading,
    AppDisplay
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media (max-width: 719.9px) {
  #app {
    margin-top: 0;
  }

  h1 {
    display: none;
  }

  .circle {
    border-radius: 0;
  }

}
</style>

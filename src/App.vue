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

.container {
    margin: 0 auto;
    max-width: 1200px;
    
}

.container.column {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: calc(100vh - 60px * 2);
}

@media (max-width: 992px) {
  .container.column {
    flex-direction: column-reverse;
    gap: 20px;
  }
}

@media (max-width: 767.9px) {
  #app {
    margin-top: 0;
  }

  .container.column {
    display: contents;
  }

  h1 {
    display: none;
  }

  .circle {
    border-radius: 0;
  }

}
</style>

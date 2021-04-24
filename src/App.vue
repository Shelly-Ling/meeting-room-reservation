<template>
  <div id="main">
    <Navbar />
    <v-app id="app">
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#main {
  display: flex;
}
#app {
  margin: 0 auto;
  margin-top: 100px;
}
</style>
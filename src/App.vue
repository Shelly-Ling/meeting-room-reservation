<template>
  <v-app id="main">
    <HelloWorld />
    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script>
// import Vue from 'vue'

import HelloWorld from './components/HelloWorld';

export default {
  name: 'app',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

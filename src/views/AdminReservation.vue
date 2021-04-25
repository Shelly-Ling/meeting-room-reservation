<template>
  <v-card class="mx-auto" id="form-wrapper">
    <ARoomReservation />
    <BRoomReservation />
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import ARoomReservation from '../components/ARoomReservation.vue'
import BRoomReservation from '../components/BRoomReservation.vue'

export default {
  components: {
    ARoomReservation,
    BRoomReservation
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  mounted() {
    console.log('currentUser', this.currentUser)
  }
}
</script>

<style scoped>
#form-wrapper {
  width: 60vw;
}
</style>
<template>
  <div>
    <h1 class="title">您的預約清單</h1>
    <v-card class="mx-auto" id="form-wrapper">
      <ARoomReservation />
      <BRoomReservation />
      <CRoomReservation />
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ARoomReservation from '../components/ARoomReservation.vue'
import BRoomReservation from '../components/BRoomReservation.vue'
import CRoomReservation from '../components/CRoomReservation.vue'


export default {
  components: {
    ARoomReservation,
    BRoomReservation,
    CRoomReservation
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
.title {
  margin: 30px 0;
}
#form-wrapper {
  width: 60vw;
  height: 83vh;
  overflow: scroll;
}
</style>
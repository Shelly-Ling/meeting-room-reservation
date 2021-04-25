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
// import userAPI from '../apis/user'
import { mapState } from 'vuex'
import ARoomReservation from '../components/ARoomReservation.vue'
import BRoomReservation from '../components/BRoomReservation.vue'
import CRoomReservation from '../components/CRoomReservation.vue'


export default {
  data() {
    return {
      // user: this.currentUser,
      ARoomReservation: [],
      BRoomReservation: [],
      CRoomReservation: []

    }
  },
  components: {
    ARoomReservation,
    BRoomReservation,
    CRoomReservation
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  // mounted() {
  //   console.log('currentUser', this.currentUser)
  //   this.fetchData()
  // },
  // methods: {
  //   async fetchData() {
  //     // console.log('this.user.id', this.currentUser.id)
  //     const response = await userAPI.getUserReservation()
  //     const { data } = response
  //     console.log('data', data)
  //     this.ARoomReservation = data[0]
  //     this.BRoomReservation = data[1]
  //     this.CRoomReservation = data[2]

  //     console.log('this.ARoomReservation', this.ARoomReservation)

  //   }
  // }
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
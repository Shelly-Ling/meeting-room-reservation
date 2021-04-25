<template>
  <div id="room-wrapper">
    <!-- <div class="card">
      <Room :initial="rooms" />
    </div> -->
    <div class="card">
      <ARoomCard />
    </div>
    <div class="card">
      <BRoomCard />
    </div>
    <div class="card">
      <CRoomCard />
    </div>
  </div>
</template>

<script>
import ARoomCard from '../components/ARoomCard.vue'
import BRoomCard from '../components/BRoomCard.vue'
import CRoomCard from '../components/CRoomCard.vue'
// import Room from '../components/Room.vue'


// import userAPI from '../apis/user'


export default {
  components: {
    // Room,
    ARoomCard,
    BRoomCard,
    CRoomCard
  },
  data() {
    return {
      // rooms: []
      roomA: {},
      roomB: {},
      roomC: {},
    }
  },
  mounted() {
    // this.fetchRoomsData()
  },
  methods: {
    // async fetchRoomsData() {
    //   try {
    //     const response = await userAPI.getAllRoomsData()
    //     const { data } = response

    //     // this.rooms = { ...data }

    //     this.roomA = { ...data[0] }
    //     this.roomB = { ...data[1] }
    //     this.roomC = { ...data[2] }

    //     console.log('this.roomA', this.roomA)
    //     console.log('this.roomB', this.roomB)
    //     console.log('this.roomC', this.roomC)

    //   } catch (error) {
    //     console.log('error', error)
    //   }
    // }
  }
}
</script>

<style scoped>
.card {
  margin: 0 10px;
}
#room-wrapper {
  height: 100vh;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  overflow: scroll;
}
</style>
<template>
  <div id="room-wrapper">
    <div class="card">
      <Room />
    </div>
    <div class="card">
      <Room />
    </div>
    <div class="card">
      <Room />
    </div>
    <div class="card">
      <Room />
    </div>
  </div>
</template>

<script>
import Room from '../components/Room.vue'

export default {

  components: {
    Room
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
  border: 1px solid red;
  overflow: scroll;
}
</style>
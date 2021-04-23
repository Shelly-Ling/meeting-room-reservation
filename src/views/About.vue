<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:3003/posts')
        .then(function (response) {
          // 1.handle success
          console.log(response)
        })
        .catch(function (error) {
          // 2.handle error
          console.log(error)
        })
        .then(function () {
          // 3.always executed
        })
    }
  }
}
</script>
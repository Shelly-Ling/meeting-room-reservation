<template>
  <v-card :loading="loading" class="mx-auto my-6" max-width="300">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <div>可預約時段</div>
      <div id="available-time-wrapper">
        <div class="available-time">09:00</div>
        <div class="available-time">13:00</div>
        <div class="available-time">17:00</div>
      </div>
    </v-card-text>

    <v-card-title>即刻預約</v-card-title>
    <form @submit.prevent="reserve">
      <div id="date-selector">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="日期"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
        <v-spacer></v-spacer>
      </div>

      <div id="time-selector">
        <v-select :items="items" v-model="bookTime" label="時間"></v-select>
        <small><em>* 預約單位為 1 小時，連續時段請分次預約。</em></small>
      </div>

      <v-btn id="submit-btn" color="deep-purple lighten-2" text type="submit">
        Reserve
      </v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    bookTime: '',
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
    items: [
      "09:00",
      "10:00",
      "11:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00"
    ],
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)

      const data = {
        bookTime: this.bookTime,
        date: this.date,
      }

      console.log('data', data)

      // this.handleSubmit()
    },
    handleSubmit(data) {
      console.log('data', data)
    }
  },
}
</script>

<style scoped>
#time-selector,
#date-selector {
  width: 90%;
  margin: 0 auto;
}

.available-time {
  display: inline-block;
  padding: 0 10px;
  margin: 5px;
  background-color: #e4e4e4;
  border-radius: 20px;
}
#submit-btn {
  background-color: rgb(238, 238, 238);
  margin: 15px;
}
</style>

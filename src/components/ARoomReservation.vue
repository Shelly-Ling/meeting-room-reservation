<template>
  <v-list three-line>
    <template v-for="(item, index) in roomA">
      <v-subheader
        v-if="item.header"
        :key="item.id"
        v-text="item.header"
      ></v-subheader>

      <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-item v-else :key="item.index">
        <v-list-item-avatar>
          <v-img :src="item.bookingUser.user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item>
          <div>{{ item.bookingUser.name }}</div>
        </v-list-item>
        <v-list-item-content>
          <v-list-item-title v-html="item.bookTime"></v-list-item-title>
        </v-list-item-content>
        <v-btn :key="item.id" class="ma-2" outlined color="indigo">
          取消預約
        </v-btn>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import userAPI from '../apis/user'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  data: () => ({
    roomA: [
      { header: 'A room' },
      {
        id: 1,
        bookingUser: {
          id: 1,
          name: 'John',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        bookTime: '14:00',
      },
      { divider: true, inset: true },
      {
        id: 2,
        bookingUser: {
          id: 2,
          name: 'Lisa',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        bookTime: '16:00',
      },
      { divider: true, inset: true },
      {
        id: 3,
        bookingUser: {
          id: 2,
          name: 'Joe',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        bookTime: '16:00',
      }
    ],
  }),
  mounted() {
    console.log('currentUser', this.currentUser)
    this.fetchData()
  },
  methods: {
    async fetchData() {
      // console.log('this.user.id', this.currentUser.id)
      const response = await userAPI.getUserReservation()
      const { data } = response
      console.log('data', data)


      this.roomA = [...data]
      console.log('roomA', this.roomA)
      // this.ARoomReservation = data[0]
      // this.BRoomReservation = data[1]
      // this.CRoomReservation = data[2]

      // console.log('this.ARoomReservation', this.ARoomReservation)

    }
  }
}
</script>
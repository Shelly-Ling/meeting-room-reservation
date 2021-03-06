import { apiHelper } from './../utils/helpers'

export default {
  getAllRoomsData() {
    return apiHelper.get('/meetingRooms')
  },
  postARoomReservation(payload) {
    return apiHelper.post('/rooms_A_reservation', {
      ...payload
    })
  },
  postBRoomReservation(payload) {
    return apiHelper.post('/rooms_B_reservation', {
      ...payload
    })
  },
  postCRoomReservation(payload) {
    return apiHelper.post('/rooms_C_reservation', {
      ...payload
    })
  }
}
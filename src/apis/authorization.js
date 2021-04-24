import { apiHelper } from './../utils/helpers'

export default {
  signIn({ name, phoneNumber }) {
    return apiHelper.post('/signin', {
      name,
      phoneNumber,
    })
  }
}
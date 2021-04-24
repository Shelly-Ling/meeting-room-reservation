<template>
  <validation-observer ref="observer" v-slot="{ invalid }" id="form-wrapper">
    <h2>登入</h2>
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:10"
      >
        <v-text-field
          v-model="name"
          :error-messages="errors"
          label="姓名"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 10,
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="10"
          :error-messages="errors"
          label="手機號碼"
          required
        ></v-text-field>
      </validation-provider>
      <v-btn class="mr-4" type="submit" :disabled="invalid">登入 </v-btn>
      <v-btn @click="clear"> 重置 </v-btn>
    </form>
  </validation-observer>
</template>


<script>
import { required, digits, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import authorizationAPI from './../apis/authorization'
// import { apiHelper } from '../utils/helpers.js'


setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be 10 digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})


export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  mounted() {
    // this.fetchData()
  },
  data: () => ({
    name: '',
    phoneNumber: '',
  }),
  methods: {
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
    async submit() {
      try {
        this.$refs.observer.validate()

        const response = await authorizationAPI.signIn({
          name: this.name,
          phoneNumber: this.phoneNumber
        })

        const { data } = response

        console.log('signInUser response', data)

        this.$store.commit('setCurrentUser', { data })

        this.$router.push('/rooms')

      } catch (error) {
        console.log('error', error)
        alert('登入失敗請稍後再試')
      }
    },
    async fetchData() {
      try {
        // const response = await apiHelper.get('/reserved')
        // console.log('response', response)

      } catch (error) {
        console.log('error', error)
        alert('無法取得資料，請稍後再試。')
      }
    }
  },
}

// import { apiHelper } from '../utils/helpers.js'

// export default {
//   mounted() {
//     this.fetchData()
//   },
//   methods: {
//     // async fetchData() {
//     //   try {
//     //     const response = await apiHelper.get('/user')
//     //     console.log('response', response)
//     //   } catch (error) {
//     //     console.log('error', error)
//     //     alert('無法取得資料，請稍後再試。')
//     //   }
//     // }
//   }
// }

</script>

<style  scoped>
#form-wrapper {
  width: 500px;
  height: auto;
  margin-top: 100px;
}
</style>

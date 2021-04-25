<template>
  <v-card height="100vh" width="256" class="mx-auto">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> 會議室預約 </v-list-item-title>
          <div class="user-greeting">
            <v-list-item-subtitle class="user-name">
              {{ currentUser.name ? currentUser.name : "使用者" }}
            </v-list-item-subtitle>
            <v-list-item-subtitle class="admin-user-name" v-if="isAdmin">
              管理員
            </v-list-item-subtitle>
            <v-list-item-subtitle class="greeting"> 您好 </v-list-item-subtitle>
          </div>
          <router-link to="/admin/signin" class="admin-sign-in-link">
            <v-btn
              class="admin-sign-in-btn"
              small
              outlined
              color="indigo"
              v-if="isAuthenticated && !isAdmin"
            >
              管理員登入
            </v-btn>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav v-if="isAuthenticated">
        <router-link to="/reservation">
          <v-list-item link v-if="!isAdmin">
            <v-list-item-icon>
              <i class="fas fa-stamp"></i>
            </v-list-item-icon>
            <v-list-item-title>我的預約</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/rooms">
          <v-list-item link v-if="!isAdmin">
            <v-list-item-icon>
              <i class="fas fa-handshake"></i>
            </v-list-item-icon>
            <v-list-item-title>會議室預約</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/admin/reservation" v-if="isAdmin">
          <v-list-item link>
            <v-list-item-icon>
              <i class="fas fa-star"></i>
            </v-list-item-icon>
            <v-list-item-title>會議室管理</v-list-item-title>
          </v-list-item>
        </router-link>
        <!-- 
        <v-list-item link>
          <v-list-item-icon>
            <i class="fas fa-star"></i>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated', 'isAdmin'])
  },
}
</script>

<style scoped>
.user-name,
.admin-user-name,
.greeting {
  display: inline-block;
  margin: 10px 0;
}
.admin-user-name,
.greeting {
  margin-left: 10px;
}
.sign-in-btn {
  font-size: 6px;
}
.admin-sign-in-link {
  text-decoration: none;
}
</style>


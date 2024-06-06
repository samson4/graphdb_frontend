<template>
  <v-app light>
    <SideBar />
    <Notification />
    <v-main class="main">
      <v-container fluid class="pa-0">
        <v-row justify="center">
          <v-col cols="12">
            <nuxt />
            <notifications
              group="center-six"
              position="top right"
              :duration="2500"
              :speed="700"
              :close-on-click="true"
              :max="10"
              classes="custom"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '~/components/menu/nav-bar'
import SideBar from '~/components/menu/side-bar'
import Notification from '~/components/global/notification'
export default {
  components: {
    NavBar,
    SideBar,
    Notification,
  },
  // middleware: ['load-info'],
  data() {
    return {
      service: {},
    }
  },
  // created() {
  //   this.service = this.$store.state.activeService
  // },
}
</script>

<style>
.main {
  background-color: rgb(251, 251, 253);
}
</style>

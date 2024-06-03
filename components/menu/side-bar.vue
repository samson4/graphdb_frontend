<template>
  <v-navigation-drawer width="230" permanent light app>
    <v-list class="py-2">
      <v-list-item class="px-3">
        <AbolLogo />
      </v-list-item>
    </v-list>
    <template>
      <v-divider />
      <SideMenu :menus="$store.state.menus" />
    </template>
    <template v-slot:append>
      <v-divider />
      <v-list rounded dense>
        <v-list-item @click="backToService()" class="py-0">
          <v-list-item-avatar>
            <v-img
              alt="avatar"
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Brian F.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import SideMenu from '~/components/menu/side-menu'
import AbolLogo from '../Icons/AbolLogo.vue'

export default {
  components: {
    SideMenu,
    AbolLogo,
  },
  methods: {
    backToService() {
      this.$store.dispatch('removeSavedService')
      this.$router.push('/')
    },
  },
  created() {
    this.$store.dispatch('selectMenus')
  },
}
</script>

<style scoped></style>

<template>
  <v-app-bar class="navbar pa-0" color="white" flat fixed light app>
    <v-icon @click="showNote" class="headline px-3 font-weight-bold"
      >mdi-plus</v-icon
    >
    <div class="headline font-weight-bold">
      {{ service ? service : 'Dashboard' }}
    </div>

    <v-spacer />
    &nbsp; &nbsp; &nbsp;
    <template>
      <v-menu
        v-model="menu"
        :close-on-content-click="true"
        :nudge-width="230"
        :max-width="330"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-hover>
            <v-icon
              slot-scope="{ hover }"
              :color="hover ? 'primary' : 'grey'"
              large
              v-on="on"
            >
              mdi-account-box
            </v-icon>
          </v-hover>
        </template>

        <v-card>
          <v-list class="py-0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Full Name</v-list-item-title>
                <v-list-item-subtitle>
                  <span v-for="role in userroles" :key="role">
                    [
                    <span class="font-weight-bold"> Role </span>
                    ]&nbsp;
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider style="background-color: #dce4f3" />

          <v-list dense class="py-1">
            <v-list-item
              v-for="(item, index) in otherMenus"
              :key="index"
              :to="item.to"
              class="tile px-0"
            >
              <v-list-item-content class="content px-4">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider style="background-color: #dce4f3" />
          <v-list dense class="py-1">
            <v-list-item class="tile px-0" @click="logout">
              <v-list-item-content class="content px-4">
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  components: {},
  computed: {
    service() {
      return this.$store.state.activeService.name
    },
  },

  data() {
    return {
      // service: this.$store.state.activeService.name,
      // full_name: this.$store.state.access.profile.full_name || 'User',
      // userroles: this.$store.state.access.profile.roles || 'Role',
      // menu: false,
      // otherMenus: this.$store.state.otherMenus || [],
      // service: {},
    }
  },
  // created() {
  //   this.service = this.$store.state.activeService
  // },
  methods: {
    logout() {
      this.$store.dispatch('access/logout')
    },
    showNote() {
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!',
      })
    },
  },
}
</script>

<style scoped>
.navbar {
  border-bottom-color: rgb(220, 228, 243) !important;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.tile:hover {
  background-color: #0079d3;
}

.content:hover {
  color: white;
}
</style>

<template>
  <v-container>
    <v-list dense>
      <v-subheader>Pages</v-subheader>
      <v-list-item-group
        v-for="(item, index) in menus"
        :key="index"
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item @click="selectService(item)" :to="item.to">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
    <!-- <v-list rounded dense>
    <template v-for="(item, index) in menus">
      <v-list-item-group :key="index" active-class="`primary--text`">
        <v-list-item :to="item.to" class="py-0 my-1">
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }} </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="subtitle-2"
              v-text="item.name"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </template>
  </v-list> -->
  </v-container>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: [],
    },
  },
  methods: {
    isActive(path) {
      return this.$route.path.indexOf(path.substring(1)) === 1
    },

    selectService(item) {
      console.log('it', item)
      this.$store.dispatch('selectActiveService', item)
    },
  },
}
</script>

<style scoped>
.tile:hover {
  background-color: #0079d3;
  color: white;
}
.activeClass::before {
  opacity: 0;
}
.highlighted {
  color: #0079d3;
}
a {
  text-decoration: none;
}
</style>

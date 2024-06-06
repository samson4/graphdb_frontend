<template>
  <v-container>
    <v-card>
      <div class="d-flex">
        <v-col>
          <v-row>
            <v-card-title>{{ title }}</v-card-title></v-row
          >
        </v-col>
      </div>

      <v-data-table
        v-model="selectedContact"
        v-show="!firstLoad"
        :headers="tableheader"
        :items="tableItems"
        :key="tableItems.id"
        :item-value="tableItems.id"
        server-items-length="25"
        loading="false"
        loader-height="2"
        :search="search"
        :footer-props="footer_props"
        class="elevation-1"
      >
        <template v-slot:[`item.name`]="{ item }">
          <div>
            {{ item.name }}
          </div>
        </template>
        <template v-slot:[`item.assigned_to`]="{ item }">
          <div>
            <v-avatar size="30"
              ><img
                lazy-src="https://picsum.photos/id/11/10/6"
                src="
                  https://cdn.vuetifyjs.com/images/lists/1.jpg
                      "
            /></v-avatar>
            {{ item.assigned_to }}
          </div>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div>
            <v-chip label color="purple" class="me-2 white--text" size="medium">
              {{ item.status }}</v-chip
            >
          </div>
        </template>
        <template v-slot:[`item.priority`]="{ item }">
          <div>
            {{ item.priority }}
          </div>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          <div>
            <v-icon class="me-2" size="medium"> mdi-calendar-outline </v-icon>

            {{ item.date }}
          </div>
        </template>
        <template v-slot:item.actions="{ item }">
          <div>
            <v-icon class="me-2" size="large"> mdi-eye-outline </v-icon>
            <v-icon size="large" @click="editItem(item)">
              mdi-pencil-outline
            </v-icon>
            <v-icon size="large"> mdi-dots-vertical </v-icon>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'center-full',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    tableheader: {
      type: Array,
      default: [],
    },
    tableItems: {
      type: Array,
      default: [],
    },
    tableFooter: {
      type: String,
      default: '',
    },
    callback: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  methods: {
    editItem(item) {
      console.log('edit', item)
    },
    deleteItem() {
      console.log('delete')
    },
  },
}
</script>

<style></style>

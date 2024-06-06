<template>
  <v-container>
    <v-card>
      <div class="d-flex">
        <v-col>
          <v-row>
            <v-card-title>{{ title }}</v-card-title></v-row
          >
        </v-col>
        <v-col>
          <v-row
            ><v-col cols="3">
              <v-autocomplete
                outlined
                :items="items"
                item-text="title"
                item-value="prependIcon"
                append-inner-icon="mdi-microphone"
                class="mx-auto"
                density="comfortable"
                menu-icon=""
                placeholder="Search"
                prepend-inner-icon="mdi-magnify"
                style="max-width: 250px; max-height: 10px"
                theme="light"
                auto-select-first
              ></v-autocomplete>
            </v-col>
            <v-col cols="3"><AssignedToFilter /> </v-col
          ></v-row>
        </v-col>
      </div>

      <v-data-table
        v-model="selectedContact"
        v-show="!firstLoad"
        :headers="tableheader"
        :items="contacts"
        :key="contacts.id"
        :item-value="contacts.id"
        server-items-length="25"
        loading="false"
        loader-height="2"
        :search="search"
        :footer-props="footer_props"
        show-select
        class="elevation-1"
      >
        <template v-slot:[`item.name`]="{ item }">
          <div
            @click="
              $router.push(`/contacts/${item.id}/contact-details/overview`)
            "
            style="cursor: pointer"
          >
            <v-avatar size="30"
              ><img
                lazy-src="https://picsum.photos/id/11/10/6"
                src="
                https://cdn.vuetifyjs.com/images/lists/1.jpg
                    "
            /></v-avatar>
            {{ item.name }}
          </div>
        </template>
        <template v-slot:[`item.email`]="{ item }">
          <div>
            <v-icon class="me-2" size="medium"> mdi-email-outline </v-icon>
            {{ item.email }}
          </div>
        </template>
        <template v-slot:[`item.phone`]="{ item }">
          <div>
            <v-icon class="me-2" size="medium"> mdi-phone-outline </v-icon>

            {{ item.phone }}
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

    <v-card flat class="mt-6" v-if="selectedContact.length">
      <div class="d-flex justify-center ma-2">
        <div class="ma-2 opacity-50">{{ selectedContact.length }} Selected</div>
        <div class="ma-2"><v-btn outlined color="primary">Export</v-btn></div>
        <div class="ma-2">
          <v-btn outlined color="primary">Create lead</v-btn>
        </div>
        <div class="ma-2"><v-btn outlined color="error">Delete</v-btn></div>
        <div class="ma-2">
          <v-btn outlined @click="selectedContact = []" color="primary"
            >Cancel</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import EditContact from './contacts/edit-contact.vue'
import AssignedToFilter from './contacts/assigned-to.vue'
export default {
  layout: 'center-full',
  components: {
    AssignedToFilter,
  },
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
    return {
      selectedContact: [],
      items: [
        {
          id: 1,
          prependIcon: 'mdi-clock-outline',
          title: 'recipe with chicken',
        },
        {
          id: 2,
          prependIcon: 'mdi-clock-outline',
          title: 'best hiking trails near me',
        },
        {
          id: 3,
          prependIcon: 'mdi-clock-outline',
          title: 'how to learn a new language',
        },
        {
          id: 4,
          prependIcon: 'mdi-clock-outline',
          title: 'DIY home organization ideas',
        },
        {
          id: 5,
          prependIcon: 'mdi-clock-outline',
          title: 'latest fashion trends',
        },
      ],
      contacts: [
        {
          id: 1,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 2,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 3,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 4,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 5,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 6,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 7,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          id: 8,
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
      ],
    }
  },
  methods: {
    gotoDetail() {
      console.log('detail')
    },
    editItem(item) {
      console.log('edit', item)
      this.$modal.show(
        EditContact,
        {
          modalName: 'Edit Contact',
          profile: item,
        },
        { width: '500' }
      )
    },
    deleteItem() {
      console.log('delete')
      this.$modal.show({})
    },
  },
}
</script>

<style></style>

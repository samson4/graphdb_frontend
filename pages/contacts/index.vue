<template>
  <v-container>
    <v-card>
      <div class="d-flex">
        <v-card-title>All Contacts</v-card-title>
        <v-spacer></v-spacer>
        <v-text-field outlined label="Search" color="primary" />
      </div>

      <v-data-table
        v-show="!firstLoad"
        :headers="headers"
        :items="contacts"
        :options.sync="options"
        server-items-length="25"
        loading="false"
        loader-height="2"
        :search="search"
        :footer-props="footer_props"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'center-full',
  data() {
    return {
      headers: [
        { text: '#', value: 'index', sortable: false },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Phone', value: 'phone' },
        { text: 'Owner', value: 'owner', sortable: false },
        { text: 'Transactions', value: 'Transactions', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      contacts: [
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
        },
      ],
    }
  },
}
</script>

<style></style>

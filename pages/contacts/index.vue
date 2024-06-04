<template>
  <dataTableVue
    title="All Contacts"
    :tableheader="headers"
    :tableItems="contacts"
  />
</template>

<script>
import DataTableVue from '../../components/data-table.vue'
export default {
  layout: 'center-full',
  components: {
    DataTableVue,
  },
  data() {
    return {
      headers: [
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
          action: 'mdi-pencil',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
          action: 'mdi-pencil',
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
          action: 'mdi-pencil',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
          action: 'mdi-pencil',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
          action: 'mdi-pencil',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
          action: 'mdi-pencil',
        },
        {
          name: 'Robert F.',
          email: 'example@email.com',
          phone: '123456789',
          owner: 'Austin',
          Transactions: '78',
          action: 'mdi-pencil',
        },
      ],
    }
  },
}
</script>

<style></style>

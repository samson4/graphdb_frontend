<template>
  <v-container>
    <TicketsDataTable
      title="All Tickets"
      :tableheader="headers"
      :table-items="tickets"
    />
  </v-container>
</template>

<script>
import TicketsDataTable from '~/components/tickets/tickets-data-table.vue'

export default {
  components: {
    TicketsDataTable,
  },
  data() {
    return {
      headers: [
        { text: 'Ticket Name', value: 'name' },
        { text: 'Assigned To', value: 'assigned_to', sortable: false },
        { text: 'Status', value: 'status' },
        { text: 'Priority', value: 'priority', sortable: false },
        { text: 'Date', value: 'date', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      tickets: [
        {
          id: 1,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 2,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 3,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 4,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 5,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 6,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 7,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
        {
          id: 8,
          name: 'Ticket xxxx',
          assigned_to: 'amanuel abiy',
          status: 'New',
          priority: 'High',
          date: '7/27/13',
          action: 'mdi-pencil',
        },
      ],
    }
  },
}
</script>

<style></style>

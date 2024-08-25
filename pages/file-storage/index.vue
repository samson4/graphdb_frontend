<template>
  <v-container>
    <v-row class="ma-4">
      <v-col cols="6">
        <Storage />
      </v-col>
      <v-col cols="12">
        <TicketsDataTable :tableheader="headers" :tableItems="tickets" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Storage from '../../components/file-storage/storage.vue'
import TicketsDataTable from '~/components/data-table.vue'
export default {
  layout: 'center-full',
  components: {
    Storage,
    TicketsDataTable,
  },
  data() {
    return {
      headers: [
        { text: 'File', value: 'file' },
        { text: 'Named Graph Id', value: 'named_graphid', sortable: false },
        { text: 'File Size', value: 'size' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      tickets: [
        {
          id: 1,
          file: 'Ticket xxxx',
          named_graphid: 'None',
          size: '100MB',
          action: 'mdi-pencil',
        },
        {
          id: 2,
          file: 'Ticket xxxx',
          named_graphid: 'None',
          size: '35MB',
          action: 'mdi-pencil',
        },
        {
          id: 3,
          file: 'Ticket xxxx',
          named_graphid: 'None',
          size: '1G',
          action: 'mdi-pencil',
        },
        {
          id: 4,
          file: 'Ticket xxxx',
          named_graphid: 'None',
          size: '165MB',
          action: 'mdi-pencil',
        },
        {
          id: 5,
          file: 'Ticket xxxx',
          named_graphid: 'None',
          size: '199MB',
          action: 'mdi-pencil',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style></style>

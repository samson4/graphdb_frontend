<template>
  <v-container class="mx-auto">
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in modules"
          cols="3"
          sm="12"
          md="3"
          xs="12"
          :key="index"
        >
          <v-card outlined class="">
            <div class="justify-center align-center">
              <div class="primary--text">
                <v-card-actions class="d-flex justify-space-between mx-auto">
                  <v-icon color="primary">{{ item.icon }}</v-icon>
                  <v-icon color="primary">mdi-menu-right</v-icon>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <div>
                <v-card-subtitle
                  class="opacity-20 text-subtitle-1 primary--text"
                  >{{ item.name }}</v-card-subtitle
                >
              </div>

              <v-card-title>1256 {{ item.name }}</v-card-title>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="9">
          <CustomersGraph />
        </v-col>
        <v-col cols="3">
          <LeadsStatus />
          <TicketsStatus />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <SalesGraph />
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CustomersGraph from '../components/customers/customers-graph.vue'
import LeadsStatus from '../components/leads/leads-status.vue'
import SalesGraph from '../components/sales/sales-graph.vue'
import TicketsStatus from '../components/tickets/tickets-status.vue'

export default {
  layout: 'center-full',
  name: 'IndexPage',
  components: {
    CustomersGraph,
    SalesGraph,
    LeadsStatus,
    TicketsStatus,
  },
  data() {
    return {
      modules: [
        { icon: 'mdi-contacts', name: 'Contacts', quantity: '123' },
        { icon: 'mdi-target', name: 'leads', quantity: '456' },
        { icon: 'mdi-plus', name: 'Customers', quantity: '789' },
        { icon: 'mdi-plus', name: 'Pending Appointments', quantity: '789' },
      ],
    }
  },
}
</script>

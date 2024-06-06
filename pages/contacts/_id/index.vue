<template>
  <v-container>
    <v-row>
      <v-col cols="3" md="3" sm="12" xs="12"><ProfileInfo /></v-col>
      <v-col cols="8" md="8" sm="12" xs="12">
        <v-card rounded outlined class="">
          <v-tabs :active-class="`primary--text`" :slider-color="`primary`">
            <template v-for="page in pages">
              <v-tab class="text-capitalize" :key="page.to" :to="page.to">{{
                page.name
              }}</v-tab>
            </template>
          </v-tabs>
          <nuxt-child />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileInfo from '~/components/profile-info.vue'
export default {
  name: 'Contact Detail',
  layout: 'center-full',
  components: {
    ProfileInfo,
  },
  data() {
    return {
      pages: [
        {
          name: 'Overview',
          to: 'overview',
        },

        {
          name: 'Notes',
          to: 'notes',
        },
        {
          name: 'Tickets',
          to: 'tickets',
        },
        {
          name: 'Transactions',
          to: 'transactions',
        },
        {
          name: 'Appointments',
          to: 'appointments',
        },
        {
          name: 'Events',
          to: 'events',
        },
        {
          name: 'Files',
          to: 'files',
        },
      ],
    }
  },
}
</script>

<style></style>

<template>
  <v-container> <Notes /> <Tickets /></v-container>
</template>

<script>
import Notes from '~/pages/contacts/_id/index/contact-details/notes/index.vue'
import Tickets from '~/pages/contacts/_id/index/contact-details/tickets/index.vue'
export default {
  components: {
    Notes,
    Tickets,
  },
}
</script>

<style></style>

<template>
  <v-container>
    <v-btn @click="addnewNote" color="primary">Create Note</v-btn>
    <Notes :notes="notes" />
  </v-container>
</template>

<script>
import Notes from '~/components/contacts/notes.vue'
import NewNote from '~/pages/contacts/_id/index/contact-details/notes/new-note.vue'
export default {
  components: {
    Notes,
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          author: 'amanuel abay',
          body: 'This monthly progress agenda is following this items This monthly progress agenda is following this items',
          created_at: new Date(),
        },
        {
          id: 2,
          author: 'amanuel abay',
          body: 'This monthly progress agenda is following this items This monthly progress agenda is following this items',
          created_at: new Date(),
        },
        {
          id: 3,
          author: 'amanuel abay',
          body: 'This monthly progress agenda is following this items This monthly progress agenda is following this items',
          created_at: new Date(),
        },
        {
          id: 4,
          author: 'amanuel abay',
          body: 'This monthly progress agenda is following this items This monthly progress agenda is following this items',
          created_at: new Date(),
        },
      ],
    }
  },
  methods: {
    addnewNote() {
      this.$modal.show(NewNote, { modalName: 'New Note' }, { width: '900' })
    },
  },
  created() {},
}
</script>

<style></style>

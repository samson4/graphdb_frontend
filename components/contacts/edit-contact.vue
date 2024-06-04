<template>
  <v-card>
    <v-card-title color="primary white--text">{{ modalName }}</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="profile.name"
        outlined
        label="Name"
        color="primary"
      />
      <v-text-field v-model="profile.phone" label="First Name" outlined />
      <v-text-field v-model="profile.email" label="Email" outlined />
      <v-text-field v-model="profile.owner" label="Last Name" outlined />
      <v-text-field v-model="profile.Transactions" label="Last Name" outlined />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    profile: { type: Object, default: () => {} },
    modalName: { type: String, default: 'Edit Contact' },
  },
  data() {
    return {
      profile: {},
    }
  },
}
</script>

<style></style>

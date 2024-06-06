<template>
  <v-container>
    <div>
      <span class="font-weight-bold"> New Note </span>
      <br />
      <v-text-field v-model="note" outlined color="primary" />
    </div>
  </v-container>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      note: '',
    }
  },
}
</script>

<style></style>

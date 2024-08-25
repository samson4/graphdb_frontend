<template>
  <v-container>
    <div>
      <span class="font-weight-bold"> New Namespace </span>
      <br />
      <v-text-field v-model="name" outlined color="primary" />
    </div>
    <v-spacer></v-spacer>
    <v-btn @click="createNamespace">Save</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: {},
  data() {
    return {
      name: '',
    }
  },
  methods: {
    async createNamespace() {
      axios.defaults.baseURL = 'http://localhost:8080'
      console.log('NNS')
      const response = await axios.post('/customers/graph/', {
        namespace: this.name,
      })
      console.log('res', response)
    },
  },
}
</script>

<style></style>

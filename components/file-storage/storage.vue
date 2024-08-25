<template>
  <v-container>
    <v-row>
      <v-badge large>
        <input
          type="file"
          accept="text/turtle,text"
          ref="fileInput"
          style="display: none"
          @change="handleFileInputChange"
        />
      </v-badge>
      <v-card
        :loading="loading"
        @click="updateProfilePicture"
        outlined
        class=""
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <div class="justify-center align-center">
          <div>
            <v-card-subtitle class="opacity-20 text-subtitle-1 primary--text"
              >upload ttl file</v-card-subtitle
            >
          </div>

          <v-card-title v-if="preview">
            <v-icon>mdi-file</v-icon>
            {{ file.name }} - {{ file.size / 1000 }}MB
            {{ file.type }}</v-card-title
          >
        </div>
      </v-card>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-container v-if="fileResult">
        <v-col v-for="(result, index) in fileResult" :key="index">
          <v-list>
            <v-list-text> {{ result[0] }} -- {{ result[1] }} </v-list-text>
          </v-list>
        </v-col>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      preview: '',
      file: null,
      fileResult: null,
      loading: false,
    }
  },
  methods: {
    updateProfilePicture() {
      this.$refs.fileInput.click()
    },
    async handleFileInputChange(e) {
      this.loading = true
      let file = e.target.files[0]
      if (file.type == 'text/turtle') {
        console.log('f', file)
        this.file = file
        try {
          const url = URL.createObjectURL(file)
          this.preview = url
          axios.defaults.baseURL = 'http://localhost:8080'
          console.log('grap')
          const response = await axios.get('/customers/graph/')
          if (response) {
            this.fileResult = response.data
            this.loading = false
          }
        } catch (error) {
          console.log(error)
          this.loading = false
        }
      }
    },
  },
}
</script>

<style></style>

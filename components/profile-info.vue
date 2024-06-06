<template>
  <v-card outlined>
    <v-card-text>
      <v-list>
        <div v-if="loading">
          <v-skeleton-loader
            v-for="i in 4"
            :key="i"
            type="list-item-avatar-three-line"
          ></v-skeleton-loader>
        </div>
        <div class="pr-1">
          <v-col>
            <v-row class="pb-4">
              <v-spacer />

              <v-badge large>
                <template v-slot:badge>
                  <v-icon @click="updateProfilePicture"> mdi-pencil </v-icon>
                </template>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  ref="fileInput"
                  style="display: none"
                  @change="handleFileInputChange"
                />
                <v-avatar v-if="!validated" size="140" class="profile-card">
                  <img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    src="
                    https://cdn.vuetifyjs.com/images/lists/1.jpg
                    "
                  />
                </v-avatar>
                <v-avatar v-else size="140" class="profile-card">
                  <img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    :src="preview"
                  />
                </v-avatar>
              </v-badge>
              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-col class="pa-0 subtitle-2 font-weight-bold">
                Evan Yates
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card-text>CEO</v-card-text>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card-text>Evan@a.com</v-card-text>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title>Main Info</v-card-title>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card-text>Evan@a.com</v-card-text>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-card-text>Evan@a.com</v-card-text>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title>Additional Info</v-card-title>
            <v-row>
              <v-col>
                <v-card-text>Job Position</v-card-text>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-card-text>CEO</v-card-text>
              </v-col>
            </v-row>
            <v-row class="py-1">
              <v-btn
                v-show="validated"
                outlined
                color="primary"
                hoverColor="primary"
                @click="uploadPicture"
                tooltip="Save"
                >Save</v-btn
              >
            </v-row>
          </v-col>
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      preview: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    }
  },
  methods: {
    updateProfilePicture() {
      this.$refs.fileInput.click()
    },
    handleFileInputChange(e) {
      let file = e.target.files[0]
      try {
        const url = URL.createObjectURL(file)
        this.preview = url
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>

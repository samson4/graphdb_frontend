<template>
  <v-card elevation="0">
    <v-system-bar color="primary" height="10"></v-system-bar>
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
                  <v-icon> mdi-pencil </v-icon>
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
                    https://picsum.photos/id/11/10/6
                    "
                  />
                </v-avatar>

                <!-- <v-avatar v-else size="140" class="profile-card">
                  <img
                    v-if="user.profile.sex == 'F'"
                    src="~assets/patient-female.png"
                  />
                  <img v-else src="~assets/patient-male.png" />
                </v-avatar> -->
                <v-avatar v-else size="140" class="profile-card">
                  <img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    :src="preview"
                  />
                </v-avatar>
              </v-badge>
              <v-spacer></v-spacer>
            </v-row>
            <!-- <v-row class="pb-2 subtitle-1 font-weight-bold">
              <v-spacer />
              <div style="text-align: center">
                {{ user.profile.title || "-" }}
                {{ user.profile.first_name || "-" }}
                {{ user.profile.middle_name || "-" }}
                {{ user.profile.last_name || "-" }}
              </div>
              <v-spacer />
            </v-row> -->
            <v-row class="py-1">
              <v-col cols="12" class="pa-0"> Username </v-col>
              <v-col class="pa-0 subtitle-2 font-weight-bold">
                <v-chip label outlined> </v-chip>
              </v-col>
            </v-row>
            <v-row class="py-1">
              <v-col cols="12" class="pa-0"> Email </v-col>
              <v-col class="pa-0 subtitle-2 font-weight-bold">
                <v-chip label outlined> </v-chip>
              </v-col>
            </v-row>
            <v-row class="py-1">
              <v-col cols="12" class="pa-0"> Roles </v-col>
              <v-col class="pa-0 subtitle-2 font-weight-bold">
                <v-chip outlined small color="primary" class="mr-1 mb-1">
                  role
                </v-chip>
              </v-col>
              <v-spacer></v-spacer>
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
export default {}
</script>

<style></style>

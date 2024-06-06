<template>
  <v-container class="">
    <TableCardHeader title="Notes" />
    <v-skeleton-loader
      v-if="firstLoad"
      type="table"
      :loading="$apollo.queries.loading"
    ></v-skeleton-loader>

    <template>
      <v-expansion-panels v-for="item in notes" :key="item.id">
        <v-expansion-panel class="my-4">
          <v-expansion-panel-header>
            Notes by {{ item.author }}
            <v-spacer></v-spacer>

            <v-menu
              :close-on-content-click="true"
              :nudge-width="230"
              :max-width="330"
              offset-y
            >
              <v-icon>mdi-dots-vertical</v-icon>
              <v-card>
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="title">Edit</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider />

                <v-divider />
                <v-list dense class="py-1">
                  <v-list-item class="tile px-0">
                    <v-list-item-content class="content px-4">
                      <v-list-item-title>Delete</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col>
                <v-card-text>{{ item.body }}</v-card-text>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-container>
</template>

<script>
export default {
  props: {
    notes: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>

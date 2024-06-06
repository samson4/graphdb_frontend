<template>
  <v-autocomplete
    outlined
    :items="items"
    item-text="name"
    item-value="name"
    append-inner-icon="mdi-microphone"
    class="mx-auto"
    density="comfortable"
    menu-icon=""
    placeholder="Assigned to"
    prepend-inner-icon="mdi-filter-outlined"
    style="max-width: 250px; max-height: 20px"
    theme="light"
    auto-select-first
    item-props
  >
    <!-- <template v-slot:[`item.name`]="{ item }">
      <div>
        {{ item.name }}
      </div>
    </template>
    <template v-slot:[`item.avatar`]="{ item }">
      <div>
        <v-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-avatar>
      </div>
    </template> -->
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Robert F.',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
      ],
    }
  },
}
</script>

<style></style>

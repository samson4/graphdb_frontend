<template>
  <v-autocomplete
    outlined
    :items="items"
    append-inner-icon="mdi-microphone"
    class="mx-auto"
    density="comfortable"
    menu-icon=""
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    style="max-width: 250px; max-height: 20px"
    theme="light"
    auto-select-first
    item-props
  ></v-autocomplete>
</template>

<script>
export default {}
</script>

<style></style>

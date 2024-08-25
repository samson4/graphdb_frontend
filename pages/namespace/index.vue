<template>
<v-container>
<v-card>
<v-card-text>
<v-btn @click="createNamespace" color="primary">Create New Namespace</v-btn>
</v-card-text>
</v-card>
</v-container>
</template>
<script>
import NewNamespace from "./new-namespace.vue"
export default {
layout: 'center-full',
methods:{
createNamespace(){
this.$modal.show(NewNamespace, { modalName: 'New Namespace' }, { width: '900' })
}
}
}
</script>

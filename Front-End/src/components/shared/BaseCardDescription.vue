<template lang="pug">
CardDescriptionField(title='Цена', :value="`${price}р за м^2\u33A1`")
CardDescriptionField(title='Вид древесины', :value="treeType", color='--dark-wrapper-color')
CardDescriptionField(title='Размеры древесины', :value="treeSize")
CardDescriptionField(title='Цена', :value="treeVolume", color='--dark-wrapper-color')
</template>

<script setup lang="ts">

import CardDescriptionField from "./CardDescriptionField.vue";

const props = defineProps({
  price: {type: Number, required: true},
  treeType: {type: String, default: "Сосна"},
  treeSize: {type: String, default: "Любые"},
  treeVolume: {type: String, default: "Неограничен"},
})
</script>

<style scoped lang="sass">

</style>

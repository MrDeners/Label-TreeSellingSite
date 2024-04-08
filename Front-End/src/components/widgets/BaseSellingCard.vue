<template lang="pug">
BaseNaming(:label="title", :color="'main-color'")
.wrapper
  v-row
    v-col(cols="6")
      v-img(:src="image" cover center no-repeat width="100")
    v-col(cols="6")
      BaseCardDescription(:price="price", :treeType="treeType", :treeSize="treeSize", :treeVolume="treeVolume")
  .text {{ description }}

</template>

<script setup lang="ts">

import BaseNaming from "../shared/BaseNaming.vue";
import BaseCardDescription from "../shared/BaseCardDescription.vue";

const props = defineProps({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  isChanged: {type: Boolean, default: false},
  image: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  treeType: {type: String, default: "Сосна"},
  treeSize: {type: String, default: "Любые"},
  treeVolume: {type: String, default: "Неограничен"},
})

</script>

<style scoped lang="sass">
.wrapper
  background-color: $light-wrapper-color
  margin: 2vh

  .text
    @include text()
</style>

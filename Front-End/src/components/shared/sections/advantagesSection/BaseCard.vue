<template lang="pug">
.card-wrapper
  v-img.img(:src="img" cover center no-repeat max-width="20vh" )
  .title {{ title }}
</template>

<script setup lang="ts">
const props = defineProps({
  title: {type: String, required: true},
  img: {type: String, default: ""},
})
</script>

<style scoped lang="sass">
.card-wrapper
  display: grid
  justify-content: center
  align-items: baseline
  background-color: var(--light-wrapper-color)
  padding: 2vh

  .title
    @include text(var(--pre_big_text_size))
</style>

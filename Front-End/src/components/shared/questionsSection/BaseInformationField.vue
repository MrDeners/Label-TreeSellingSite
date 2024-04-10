<template lang="pug">
.card-wrapper
  .title {{ title }}
  .text {{ text }}
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  text: String,
})
</script>

<style scoped lang="sass">
.card-wrapper
  width: 70%
  display: grid
  justify-content: center
  align-items: center
  grid-gap: 0
  background-color: var(--main-color)
  padding: 2vh
  text-align: center

  .title
    @include text(var(--pre_big_text_size), var(--accent-color))

  .text
    @include text(var(--small_text_size))
</style>

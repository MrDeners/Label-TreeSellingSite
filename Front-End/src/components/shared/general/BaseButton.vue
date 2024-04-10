<template lang="pug">
.button-wrapper
  .title {{ title }}
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: 'Отправить'}
})
</script>

<style scoped lang="sass">
.button-wrapper
  background-color: var(--accent-color)
  border-radius: 20px
  padding: 1vh
  text-align: center

  .title
    @include text(var(--medium_text_size))
</style>

<template lang="pug">
.address-wrapper
  .title {{ title }}
</template>

<script setup lang="ts">
const props = defineProps({
  title: {type: String, required: true},
})
</script>

<style scoped lang="sass">

.address-wrapper
  padding: 2vh 3vh
  background-color: var(--light-wrapper-color)

  .title
    @include text(var(--medium_text_size), var(--accent-color))
</style>

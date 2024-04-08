<template lang="pug">
.wrapper
  v-row
    v-col.justify-start
      .text {{ title }}
    v-col.justify-center
      .text {{ value }}


</template>

<script setup lang="ts">

const props = defineProps({
  title: {type: String, required: true},
  value: {type: String, required: true},
  color: {type: String, default: "--main-color"}
});
</script>

<style scoped lang="sass">
.wrapper
  background-color: v-bind(color)

  .text
    @include text(var(--very_small_text_size))
</style>

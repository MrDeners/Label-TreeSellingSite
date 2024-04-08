<template lang="pug">
v-container.wrapper
  v-img(:src="icon" width="30" height="30" cover center no-repeat)
  .text {{ label }}
</template>

<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: true},
  icon: {type: String, required: true}
});
</script>

<style scoped lang="sass">
.wrapper
  .text
    @include text(var(--small_text_size))
</style>

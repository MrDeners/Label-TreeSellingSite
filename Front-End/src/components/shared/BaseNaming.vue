<template lang="pug">
.wrapper
  h1 {{ label }}

</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  label: String,
  color: {type: String, default: '--very-light-wrapper-color'}
});
</script>

<style scoped lang="sass">

.wrapper
  height: 12vh
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  //padding: 2vh
  background-color: v-bind(color)

  h1
    @include text()
</style>

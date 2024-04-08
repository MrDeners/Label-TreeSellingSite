<template lang="pug">
.wrapper
  h1 {{ label }}

</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  label: String,
  color: String
});
</script>

<style scoped lang="sass">

.wrapper
  height: 100%
  width: 100%
  text-align: center
  padding: 2vh
  background-color: $dark-wrapper-color

  h1
    @include text()
</style>

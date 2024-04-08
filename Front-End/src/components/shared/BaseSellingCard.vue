<template lang="pug">
BaseSectionName(:label='label', :color="'main-color'")
.wrapper



</template>

<script setup lang="ts">

import BaseSectionName from "./BaseSectionName.vue";

const props = defineProps({
  label: String
});

</script>

<style scoped lang="sass">
.wrapper
  background-color: $light-wrapper-color
  margin: 2vh
</style>

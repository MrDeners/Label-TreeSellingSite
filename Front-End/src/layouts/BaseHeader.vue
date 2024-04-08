<template lang="pug">
.wrapper
  v-row
    v-col(cols="12" sm="auto")
      BaseLogo(:image="logo")
    v-col(cols="12" sm="auto")
      BaseIconText(:label="labelOne", :icon="iconOne")
    v-col(cols="12" sm="auto")
      BaseIconText(:label="labelTwo", :icon="iconTwo")
    v-col(cols="12" sm="auto")
      BaseIconText(:label="labelThree", :icon="iconThree")

</template>

<script setup lang="ts">

import BaseIconText from "../components/shared/BaseIconText.vue";
import BaseLogo from "../components/shared/BaseLogo.vue";

const props = defineProps({
  labelOne: {type: String, required: true},
  labelTwo: {type: String, required: true},
  labelThree: {type: String, required: true},
  iconOne: {type: String, required: true},
  iconTwo: {type: String, required: true},
  iconThree: {type: String, required: true},
  logo: {type: String, required: true}
});
</script>

<style scoped lang="sass">
.wrapper
  width: 100%
  background-color: $dark-wrapper-color


</style>

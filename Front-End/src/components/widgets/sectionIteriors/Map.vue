<template lang="pug">
v-container.wrapper
  BaseMap
  BaseAddress(:title="title")
</template>

<script setup lang="ts">
import BaseMap from "../../shared/sections/mapSection/BaseMap.vue";

const title: String = 'Беларусь, г. Минск пр-т Партизанский, 168 к.2';
import BaseAddress from "../../shared/sections/mapSection/BaseAddress.vue";
</script>

<style scoped lang="sass">
.wrapper
  display: grid
  justify-content: center
  align-items: center
  grid-gap: 5vh
</style>

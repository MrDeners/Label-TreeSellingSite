<template lang="pug">
.wrapper
    h1 {{ label }}
</template>

<script setup lang="ts">
import { defineProps, } from 'vue'

defineProps({
  label: String,
  isActive: { type: Boolean, default: true }
});

const backgroundColor = '$light-wrapper-color';

document.documentElement.style.setProperty('--background-color', backgroundColor);


</script>

<style scoped lang="sass">
.wrapper
  height: 100%
  width: 100%
  text-align: center
  margin: 1vh
  padding: 2vh
  border-radius: 20px
  background-color: var(--background-color) // Использование переменной CSS для установки цвета фона
  transition: background-color, transform 0.3s, 0.3s

  h1
    @include text()

  &:hover
    background-color: $accent-color
    transform: scale(1.1)


</style>

<!--<style lang="scss">-->
<!--:root {-->
<!--  &#45;&#45;background-color: blue;-->
<!--}-->

<!--.wrapper {-->
<!--  height: 100%;-->
<!--  width: 100%;-->
<!--  text-align: center;-->
<!--  margin: 3vh;-->
<!--  padding: 2vh;-->
<!--  border-radius: 20px;-->
<!--  background-color: var(&#45;&#45;background-color);-->
<!--}-->
<!--</style>-->

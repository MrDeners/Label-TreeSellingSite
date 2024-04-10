<template lang="pug">
v-container.card-wrapper
  v-row.align-center.justify-space-around
    v-col(cols="5")
      .title {{ title }}
      .communication {{ firstCommunication }}
      .communication {{ secondCommunication }}
      .communication {{ thirdCommunication }}
    v-col(cols="7")
        BaseButton(title='Заказать обратный звонок')


</template>

<script setup lang="ts">
import BaseButton from "../../general/BaseButton.vue";

const props = defineProps({
  title: {type: String, default: 'Остались вопросы?'},
  firstCommunication: {type: String, default: '+375 29 307 77 00'},
  secondCommunication: {type: String, default: '+375 17 399 55 74'},
  thirdCommunication: {type: String, default: 'zakaz@palletby.by'},
})
</script>

<style scoped lang="sass">
.card-wrapper
  width: 70%
  background-color: var(--dark-wrapper-color)
  padding: 3vh 5vh

  .title
    @include text(var(--pre_big_text_size), var(--accent-color))

  .communication
    text-decoration: underline
    @include text(var(--small_text_size))
</style>

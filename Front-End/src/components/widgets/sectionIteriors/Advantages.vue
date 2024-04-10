<template lang="pug">
v-row.justify-space-around
  v-col
    BaseCard.fill-height(title="Гарантия качества", img="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?w=1380&t=st=1712752908~exp=1712753508~hmac=ed08d9ede42960546ab5877bd3b51086d19a7a9dbbf4fcd362aee1c31e0f9b63")
  v-col
    BaseCard.fill-height(title="Доставка по всей стране", img="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?w=1380&t=st=1712752908~exp=1712753508~hmac=ed08d9ede42960546ab5877bd3b51086d19a7a9dbbf4fcd362aee1c31e0f9b63")
  v-col
    BaseCard.fill-height(title="Собственное производства", img="https://img.freepik.com/free-psd/check-symbol-isolated_23-2150500363.jpg?w=1380&t=st=1712752908~exp=1712753508~hmac=ed08d9ede42960546ab5877bd3b51086d19a7a9dbbf4fcd362aee1c31e0f9b63")
</template>

<script setup lang="ts">

import BaseCard from "../../shared/advantagesSection/BaseCard.vue";
</script>

<style scoped lang="sass">

</style>

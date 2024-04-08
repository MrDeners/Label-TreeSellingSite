<template lang="pug">
BaseHeader(label-one="+375 29 123-45-67", label-two="+375 29 123-45-67", label-three="hello@mail.ru", icon-one="", icon-two="", icon-three="", logo="" ) )
BaseSection(label="Пиломатериалы оптом", :widget="BaseCatalogView")
BaseSection(label="Услуги", :widget="BaseCatalogView")
BaseSection(label="Инфо", :widget="BaseCatalogView")


</template>

<script setup lang="ts">

import BaseSection from "../../layouts/BaseSection.vue";
import BaseHeader from "../../layouts/BaseHeader.vue";
</script>

<style scoped lang="sass">

</style>

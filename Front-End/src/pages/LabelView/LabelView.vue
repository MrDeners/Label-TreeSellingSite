<template lang="pug">
BaseHeader(label-one="+375 29 123-45-67", label-two="+375 29 123-45-67", label-three="hello@mail.ru", icon-one="", icon-two="", icon-three="", logo="" ) )
BaseSection(label="Пиломатериалы оптом", :widget="MainDescription")
BaseSection(label="Услуги", :widget="BaseSellingCardsView")
BaseSection(label="Инфо", :widget="Info")


</template>

<script setup lang="ts">
import Info from "../../components/widgets/Info.vue";
import MainDescription from "../../components/widgets/MainDescription.vue";
import BaseSection from "../../layouts/BaseSection.vue";
import BaseHeader from "../../layouts/BaseHeader.vue";
import BaseSellingCardsView from "../../components/widgets/BaseSellingCardsView.vue";
</script>

<style scoped lang="sass">

</style>

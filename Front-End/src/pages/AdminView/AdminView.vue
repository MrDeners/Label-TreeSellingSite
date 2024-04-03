<template lang="pug">
header
  SectionName(label="Панель Администратора", :color="'dark-wrapper-color'")  //TODO: Change text color
main
  BaseSection(label="Изображения на главной странице", :widget="BaseCatalogView")
  BaseSection(label="Категории", :widget="BaseCatalogView")
  BaseSection(label="Проекты", :widget="BaseCatalogView")
  BaseSection(label="Документация", :widget="BaseCatalogView")
</template>

<script setup lang="ts">
import SectionName from "../../components/shared/BaseSectionName.vue";
import BaseCatalogView from "../../components/widgets/BaseCardsView.vue";
import BaseSection from "../../layouts/BaseSection.vue";

</script>

<style scoped lang="sass">

</style>

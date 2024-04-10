<template lang="pug">
BaseHeader(label-one="+375 29 123-45-67", label-two="+375 29 123-45-67", label-three="hello@mail.ru", icon-one="", icon-two="", icon-three="", logo="" ) )
BaseSection(label="Пиломатериалы оптом", :widget="MainDescription")
BaseSection(label="Услуги", :widget="BaseSellingCardsView")
BaseSection(label="Инфо", :widget="Info")
BaseSection(label="Частые вопросы", :widget="QuestionsIterior")
BaseSection(label="Наши преимущества", :widget="Advantages")
BaseSection(label="Мы на карте", :widget="Map")


</template>

<script setup lang="ts">
import Info from "../../components/widgets/sectionIteriors/Info.vue";
import MainDescription from "../../components/widgets/sectionIteriors/MainDescription.vue";
import BaseSection from "../../layouts/BaseSection.vue";
import BaseHeader from "../../layouts/BaseHeader.vue";
import BaseSellingCardsView from "../../components/widgets/BaseSellingCardsView.vue";
import QuestionsIterior from "../../components/widgets/sectionIteriors/QuestionsIterior.vue";
import Advantages from "../../components/widgets/sectionIteriors/Advantages.vue";
import Map from "../../components/widgets/sectionIteriors/Map.vue";
</script>

<style scoped lang="sass">

</style>

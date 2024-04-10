<template lang="pug">
.wrapper
  v-row.justify-start
    BaseInformationField(:title="firstTitle", :text="firstText")
  v-row.justify-end
    BaseInformationField(:title="secondTitle", :text="secondText")
  v-row
    ButtonInformationField
</template>

<script setup lang="ts">

import BaseInformationField from "../../shared/questionsSection/BaseInformationField.vue";
import ButtonInformationField from "../../shared/questionsSection/ButtonInformationField.vue";

const firstTitle: String = 'Как заказать пиломатериалы оптом?';
const firstText: String = 'Своим клиентам мы предлагаем купить оптом пиломатериалы различных сортов  древесины. Вы можете заказать материалы как стандартных, так и  нестандартных размеров в зависимости от ваших нужд. Доставку мы  осуществляем посредством услуг транспортных компаний, также вы можете  самостоятельно забрать свой заказ. Стоимость доставки будет зависеть от  объема товара и расстояния, на которое его нужно транспортировать. Мы  используем многопильное и углопильное оборудование WoodVER.';
const secondTitle: String = 'Где закупаем пиломатериалы?';
const secondText: String = 'Наша компания закупает широкий ассортимент обрезного пиломатериала, а также лес кругляк. Мы заинтересованы в постоянной закупке';
</script>

<style scoped lang="sass">
.wrapper
  display: grid
  grid-gap: 5vh
</style>

<template lang="pug">
v-container.main-grid
  v-img.img(:src="image" center cover no-repeat height="400")
  .wrapper
    .text {{ Description }}
  //v-container
  //  video(controls)
  //    source(:src="videoURL")

</template>

<script setup lang="ts">

const image = 'https://smart-les.ru/obreznaja-doska_mini_02.jpg'
const Description = 'ООО «Паллетбай» предлагает своим клиентам купить пиломатериалы оптом по  наиболее выгодным ценам! В нашем обширном ассортименте можно найти  необрезную и обрезную доску, брус различных размеров и сортов, а также  дрова из обрезков пиломатериалов. Вы можете разместить заказ с доставкой  или самовывозом, и мы осуществим распиловку точно по указанным вами  размерам!'
//const videoURL = ''
</script>

<style scoped lang="sass">
.main-grid
  display: grid
  grid-gap: 5vh

.img
  border-radius: 30px

.wrapper
  background-color: $light-wrapper-color
  padding: 3vh 5vh
  margin: 0 2vh

  .text
    text-align: center
    @include text()
</style>

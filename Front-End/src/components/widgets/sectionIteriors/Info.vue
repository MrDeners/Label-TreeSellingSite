<template lang="pug">
.wrapper
  v-row(wrap)
    v-col(cols="12" lg="8")
      .text {{ text }}
    v-col(cols="12" lg="4")
      v-img.image(:src="image" cover center no-repeat)


</template>

<script setup lang="ts">
const text = 'Важно знать, что все пиломатериалы отличаются между собой по  характеристикам. Наиболее важным параметром является сорт, он говорит о  качестве первичной древесины, из которой был получен данный  пиломатериал. Сегодня выпускают пиломатериалы первого (отборного),  второго, третьего и четвертого сортов. Наиболее востребованными для  строительных работ являются второй и третий сорта.\n' +
    'Любую информацию о размерах, материалах, технологиях производства,  маркировке и стоимости материалов можно уточнить, связавшись с нашими  специалистами по телефону, e-mail или посетив офис ООО «Паллетбай» в  Минске.'
const image = 'https://smart-les.ru/obreznaja-doska_mini_02.jpg'

</script>

<style scoped lang="sass">
.wrapper
  background-color: $light-wrapper-color
  padding: 3vh 5vh
  margin: 0 2vh

  .text
    text-align: center
    @include text(var(--small_text_size))

  .image
    height: 100%
</style>

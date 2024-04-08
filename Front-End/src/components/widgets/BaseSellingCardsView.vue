<template lang="pug">
v-row
  v-col(v-for="card in productStore.products" cols="12" xl="6")
    BaseSellingCard(
      :isChanged='true'
      :id="card.Id",
      :title="card.Title",
      :image="card.Image",
      :description="card.Description",
      :price='card.price',
      :treeType='card.treeType',
      :treeSize='card.treeSize',
      :treeVolume='card.treeVolume')

  //v-col(v-if="isChanged" cols="6" sm="4" md="3" xl="2")
  //  BaseSellingCard( :image="'https://habrastorage.org/r/w1560/getpro/habr/upload_files/106/d03/270/106d03270c016c1309719678f40dc4ad.png'")

</template>

<script setup lang="ts">

import BaseSellingCard from "./BaseSellingCard.vue";
import { onMounted } from 'vue';
import { useProductsStore } from '../../store/productsStore.ts';

const props = defineProps({
  isChanged: {type: Boolean, default: false}
})

const { getProducts } = useProductsStore();
const productStore = useProductsStore();

//onMounted(() => { getProducts(); })




//let cards = ref(props.cards as { id: number }[]);
// function deleteCard(id: number) {
//   props.cards = props.cards.filter(card: { id: number } => card.id !== id);
// }

</script>

<style scoped lang="sass">

</style>

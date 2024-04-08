<template lang="pug">
v-img(:src="image" cover center no-repeat)
</template>

<script setup lang="ts">
const props = defineProps({
  image: {type: String, required: true}
})
</script>

<style scoped lang="sass">

</style>

<template>
  <div class="map" ref="mapContainer"></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afc7813ed3ac794512d842336dad1fe79d7555559dd2bd5e204a4cf4eee619f90&amp;width=800&amp;height=500&amp;lang=ru_RU&amp;scroll=true';
    script.async = true;
    script.charset = 'utf-8';
    this.$refs.mapContainer.appendChild(script);
  }
};
</script>

<style scoped lang="sass">
.map
  width: 120%
  height: 60vh
  position: relative
  left: -10%
</style>

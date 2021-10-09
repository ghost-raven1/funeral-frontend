<template>
<div>
  <GmapMap
    :center="{lat: 57.075840, lng: 86.229767}"
    :zoom="16"
    map-type-id="hybrid"
    style="width: 100%; height: 600px"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      @click="center=m.position"
    />
  </GmapMap>
</div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      center: { lat: 57.075840, lng: 86.229767 },
      markers: [
        {
          position: {lat: 57.075840, lng: 86.229767 },
        },
      ],
    };
  },
}
</script>

<style scoped>

</style>

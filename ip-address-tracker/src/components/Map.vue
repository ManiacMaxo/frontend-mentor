<script setup>
import { defineProps, onMounted } from 'vue'
import L from 'leaflet'

const props = defineProps({
    location: Array
})

const zoom = 15

const icon = L.icon({
    iconUrl: 'assets/marker.svg',
    iconAnchor: [30, 55],
    popupAnchor: [-3, -76]
})

onMounted(() => {
    const map = L.map('map', {
        center: props.location,
        zoom,
        attributionControl: false,
        zoomControl: false
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    L.marker(props.location, { icon }).addTo(map)
})
</script>

<template>
    <div class="wrapper">
        <div id="map"></div>
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    height: calc(100vh - var(--header-height));
}

#map {
    height: 100%;
}
</style>

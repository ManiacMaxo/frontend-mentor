<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { Country } from '../utils/types'

const props = defineProps<{ country: Country }>()

const { country } = toRefs(props)
</script>

<template>
    <div class="card">
        <div class="card-flag" :data-src="country.flag" />
        <h3>{{ country.name }}</h3>
        <ul>
            <li><span>Population: </span>{{ country.population }}</li>
            <li><span>Region: </span>{{ country.region }}</li>
            <li><span>Capital: </span>{{ country.capital }}</li>
        </ul>
    </div>
</template>

<style scoped>
.card {
    border-radius: 5px;
}

.card-flag {
    width: 100%;
    aspect-ratio: 2 / 3;

    background-size: cover;
    background-image: attr(data-src);
}
</style>

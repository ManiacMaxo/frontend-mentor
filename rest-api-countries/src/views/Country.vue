<script setup lang="ts">
import { ArrowNarrowLeftIcon } from '@heroicons/vue/solid'
import { defineProps, onMounted, ref } from 'vue'
import { fetchCountry } from '../utils'
import { CountryDetail } from '../utils/types'

const props = defineProps({
    country: String
})

const data = ref<CountryDetail | null>(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        data.value = await fetchCountry(props.country || '')

        console.log(data.value)
    } catch (err) {
        error.value = err
    }

    loading.value = false
})
</script>

<template>
    <div class="container">
        <router-link to="/" class="return-link">
            <ArrowNarrowLeftIcon /> Back
        </router-link>

        <img
            :src="data.flag"
            :alt="data.name"
            class="flag"
            v-if="!loading && data"
        />

        <div class="content" v-if="!loading && data">
            <h1>{{ data.name }}</h1>
            <div>
                <ul>
                    <li><span>Native name: </span>{{ data.nativeName }}</li>
                    <li><span>Population: </span>{{ data.population }}</li>
                    <li><span>Region: </span>{{ data.region }}</li>
                    <li><span>Sub region: </span>{{ data.subRegion }}</li>
                    <li><span>Capital: </span>{{ data.capital }}</li>
                </ul>
                <ul>
                    <li>
                        <span>Top level domain: </span>{{ data.topLevelDomain }}
                    </li>
                    <li>
                        <span>Currencies: </span>
                        {{ data.currencies.join(', ') }}
                    </li>
                    <li>
                        <span>Languages: </span>{{ data.languages.join(', ') }}
                    </li>
                </ul>
            </div>
            <div>
                <span>Bordering Countries:</span>
                <ul>
                    <li v-for="country in data.borders" :key="country">
                        {{ country }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem 8rem;
    grid-template-areas: 'header header' 'img img' 'content content';

    margin-top: 5rem;
}

.return-link {
    font-size: 1rem;

    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    grid-area: header;

    padding: 0.5rem 2rem;
    width: max-content;

    background-color: var(--colors-el);
    box-shadow: var(--shadow);
    border-radius: 0.5rem;
}

.return-link svg {
    height: 1rem;
}

.flag {
    width: 100%;

    grid-area: img;
}

.content {
    padding-top: 2.5rem;

    grid-area: content;
}

@media screen and (min-width: 40rem) {
    .container {
        grid-template-areas: 'header header' 'img content';
    }
}
</style>

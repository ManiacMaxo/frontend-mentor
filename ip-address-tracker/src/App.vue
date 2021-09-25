<script setup>
import { onMounted, ref } from 'vue'
import { Header, Map } from './components'

const ip = ref('')
const location = ref([43.7384, 7.4246])

onMounted(() => {
    if (!process.env.VUE_APP_API_KEY || !ip.value) return

    fetch(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.VUE_APP_API_KEY}&ipAddress=${ip.value}`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
})

const handleSearch = (query) => {
    console.log(query)
}
</script>

<template>
    <Header @search="handleSearch" />
    <Map :location="location" />
</template>

<style global>
html,
body {
    margin: 0;
    padding: 0;
    font-size: 18px;
}

#app {
    font-family: 'Rubik', sans-serif;
}

:root {
    --colors-dark: hsl(0, 0%, 17%);
    --colors-medium: hsl(0, 0%, 59%);

    --header-height: 280px;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>

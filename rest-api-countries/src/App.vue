<script setup>
import { GlobalHeader } from './components'
</script>

<template>
    <GlobalHeader />
    <router-view />
</template>

<style global>
.container {
    width: min(90%, 1440px);
    margin: 0 auto;
}
</style>

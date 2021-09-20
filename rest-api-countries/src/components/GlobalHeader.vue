<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'
import { ref, onMounted, computed, watch } from 'vue'

const theme = ref('light')
const oppositeTheme = computed(() =>
    theme.value === 'light' ? 'dark' : 'light'
)
const icon = computed(() => (theme.value === 'light' ? SunIcon : MoonIcon))

const switchTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

watch(theme, () => {
    document.body.classList.add(theme.value)
    document.body.classList.remove(oppositeTheme.value)
})

onMounted(() => {
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches

    theme.value = prefersDark ? 'dark' : 'light'
})
</script>

<template>
    <header class="global-header">
        <div class="container">
            <h1 class="title">Where in the world?</h1>
            <button @click="switchTheme" class="theme-switcher">
                <component :is="icon" />
                {{ theme }} mode
            </button>
        </div>
    </header>
</template>

<style scoped lang="scss">
.global-header {
    background-color: var(--colors-el);
    box-shadow: var(--shadow);

    width: 100%;

    > .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1.55em 0;
    }
}

.title {
    font-size: 1.7em;
}

.theme-switcher {
    display: flex;
    gap: 0.25em;

    text-transform: capitalize;
    font-weight: 600;

    svg {
        height: 1.25em;
    }
}
</style>

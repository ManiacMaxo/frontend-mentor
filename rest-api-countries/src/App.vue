<script setup>
import { GlobalHeader } from './components'
</script>

<template>
    <GlobalHeader />
    <router-view />
</template>

<style global>
*,
*::before,
*::after {
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    word-wrap: break-word;
}

h1,
h2,
h3,
h4,
h5,
span,
p,
ul,
ol {
    margin: 0;
    padding: 0;
}

a {
    background-color: transparent;
    color: inherit;
    text-decoration: inherit;
}

html,
body,
#app {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
}

body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;

    background-color: var(--colors-bg);
    color: var(--colors-text);
}

:root {
    --shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.2);
}

.light {
    --colors-text: #111517;
    --colors-bg: #fafafa;
    --colors-el: #ffffff;
    --colors-subtle: #858585;
}

.dark {
    --colors-text: #ffffff;
    --colors-bg: #202d35;
    --colors-el: #2a3744;
    --colors-subtle: #fafafa;
}

button {
    all: unset;
    cursor: pointer;
}

.container {
    width: min(89%, 1440px);
    margin: 0 auto;
}
</style>

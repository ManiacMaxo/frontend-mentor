<script setup>
import { defineEmits, defineProps, ref } from 'vue'

defineEmits(['search'])
const props = defineProps({
    ip: String,
    location: String,
    timezone: String,
    isp: String
})

const query = ref('')

const search = (event) => {
    event.preventDefault()

    console.log(query.value)
    // context.emit('search', query.value)
}
</script>

<template>
    <header class="global-header">
        <h1>IP Address Tracker</h1>
        <form class="input-group container" @submit="search">
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                v-model="query"
            />
            <button>
                <img src="../assets/icon-arrow.svg" alt="->" />
            </button>
        </form>

        <div class="card container">
            <div class="card-section">
                <h3 class="label">IP Address</h3>
                <span class="content">{{ props.ip }}</span>
            </div>

            <hr />
            <div class="card-section">
                <h3 class="label">Location</h3>
                <span class="content">{{ props.location }}</span>
            </div>

            <hr />
            <div class="card-section">
                <h3 class="label">Timezone</h3>
                <span class="content">{{ props.timezone }}</span>
            </div>

            <hr />
            <div class="card-section">
                <h3 class="label">ISP</h3>
                <span class="content">{{ props.isp }}</span>
            </div>
        </div>
    </header>
</template>

<style scoped>
.container {
    margin: 0 auto;
    width: min(90vw, 100%);
}

.global-header {
    background-image: url('../assets/pattern-bg.png');
    background-size: cover;
    color: #fff;

    height: var(--header-height);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 1000;
}

.input-group {
    display: flex;
    border-radius: 0.75rem;
    overflow: hidden;

    width: 25rem;
}

.input-group > input {
    all: unset;
    flex: 1;
    padding: 1rem;
    background-color: #fff;
    color: var(--colors-dark);
}

.input-group > button:hover {
    background-color: var(--colors-dark);
}

.input-group > button {
    all: unset;

    cursor: pointer;
    padding: 1rem;
    background-color: #000;
}

.card {
    display: grid;
    grid-template: repeat(4, 1fr) / 1fr;
    gap: 1rem;

    text-align: center;

    background-color: #fff;
    border-radius: 0.75rem;
    padding: 1rem 2rem;
    max-width: 1100px;

    position: absolute;
    top: 100%;
    transform: translateY(-50%);
}

.card-section {
    border: 1px solid black;
}

.card-section > .label {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7em;
    letter-spacing: 0.15ch;

    color: var(--colors-medium);
}

.card-section > .content {
    font-size: 1.25em;
}

@media screen and (min-width: 768px) {
    .card {
        grid-template: 1fr / repeat(4, 1fr);
        text-align: inherit;
    }
}
</style>

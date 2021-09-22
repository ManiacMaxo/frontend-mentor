<script setup>
import { ref } from 'vue'
import { SearchIcon, ChevronDownIcon } from '@heroicons/vue/solid'

const dropdownVisible = ref(false)
const toggleDropdown = () => (dropdownVisible.value = !dropdownVisible.value)

const counties = [{ flag: '', name: '' }]

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
</script>

<template>
    <div class="header container">
        <div class="input-group">
            <SearchIcon class="icon" />
            <input placeholder="Search for a country..." class="form-element" />
        </div>
        <div class="relative">
            <button @click="toggleDropdown" class="form-element">
                Filter by Region
                <ChevronDownIcon class="icon" />
            </button>

            <div v-if="dropdownVisible" class="dropdown">
                <ul>
                    <li v-for="region in regions" :key="region">
                        {{ region }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    margin-top: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input-group {
    position: relative;
    width: 475px;
}

.input-group > svg {
    position: absolute;
    top: 50%;
    left: 1.75rem;
    transform: translateY(-50%);

    height: 1.5em;
}

.icon {
    height: 1em;
}

.input-group > input {
    padding-left: 4.25rem;
    width: 100%;
}

.form-element {
    padding: 1.25rem 1.25rem 1.25rem 1.5rem;

    background-color: var(--colors-el);
    color: var(--colors-text);
    box-shadow: var(--shadow);

    border-radius: 0.25rem;

    outline: none;
    border: none;
}

.form-element::placeholder {
    color: var(--colors-text);
}

button.form-element {
    display: flex;
    align-items: center;

    gap: 2.25rem;
}

.relative {
    position: relative;
}

.dropdown {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;

    margin-top: 0.5rem;
    padding: 1rem 1.25rem;

    background-color: var(--colors-el);
    color: var(--colors-text);
    box-shadow: var(--shadow);

    border-radius: 0.25rem;
}

.dropdown > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>

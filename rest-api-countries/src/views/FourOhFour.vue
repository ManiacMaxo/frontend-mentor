<template>
    <div class="center">
        <h1 class="title">Page not found</h1>
        <router-link to="/" class="button">Go back home</router-link>
    </div>
</template>

<style scoped>
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    align-items: center;
    justify-content: center;
}

.title {
    font-size: 2.5rem;
}

.button {
    padding: 0.5rem 1rem;
    background-color: var(--colors-el);

    border: 1px dashed var(--colors-text);
    border-radius: 0.5rem;
}
</style>

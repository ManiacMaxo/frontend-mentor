<script lang="ts">
    import { ThemeSwitch, Keypad } from './components'

    $: screen_result = 0
</script>

<main>
    <header class="global-header">
        <span class="logo">calc</span>
        <ThemeSwitch />
    </header>
    <div class="screen">
        <span>{screen_result}</span>
    </div>
    <div class="keys">
        <Keypad />
    </div>
</main>

<style lang="scss">
    main {
        max-width: 500px;
        width: 100%;

        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    .global-header {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        font-size: 2rem;
    }

    .screen,
    .keys {
        font-size: 32px;
        padding: 25px;
        border-radius: 10px;
    }

    .screen {
        background-color: var(--colors-bg-screen);
        text-align: right;
    }

    .keys {
        background-color: var(--colors-bg-secondary);

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.7em;
    }
</style>

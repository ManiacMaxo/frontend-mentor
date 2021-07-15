<script lang="ts">
    import { evaluate } from 'mathjs'
    import { CopyToClip, Keypad, ThemeSwitch } from './components'

    let query = ''

    const solve = () => {
        if (!query) return

        query = `${evaluate(query)}`
    }
</script>

<main>
    <header class="global-header">
        <h1 class="logo">calc</h1>
        <ThemeSwitch />
    </header>
    <div class="screen">
        <div class="wrapper">
            <span>{query === '' ? 0 : query}</span>
        </div>
        <CopyToClip bind:value={query} />
    </div>
    <div class="keys">
        <Keypad on:enter={solve} bind:value={query} />
    </div>
</main>

<style lang="scss">
    main {
        max-width: 500px;
        width: min(100%, 90vw);

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
        height: calc(38px + 2 * 25px);
        position: relative;

        padding-top: 5px;

        .wrapper {
            overflow-y: scroll;
            position: relative;

            height: 100%;
            width: 100%;
        }

        span {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;

            text-align: right;
        }
    }

    .keys {
        background-color: var(--colors-bg-secondary);

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.7em;
    }

    @media screen and (max-width: 500px) {
        .screen,
        .keys {
            font-size: 25px;
        }
    }
</style>

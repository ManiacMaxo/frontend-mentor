<script lang="ts">
    import { onMount } from 'svelte'
    import Moon from 'carbon-icons-svelte/lib/Asleep16'
    import MoonFilled from 'carbon-icons-svelte/lib/AsleepFilled16'

    export let theme = 'light'

    $: oppositeTheme = theme === 'light' ? 'dark' : 'light'

    $: icon = theme === 'light' ? Moon : MoonFilled

    const switchTheme = () => {
        theme = oppositeTheme
    }

    $: theme &&
        (() => {
            document.body.classList.add(theme)
            document.body.classList.remove(oppositeTheme)
        })()

    onMount(() => {
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches

        theme = prefersDark ? 'dark' : 'light'
    })
</script>

<header class="header">
    <div class="container">
        <h1 class="title">Where in the world?</h1>
        <button on:click={switchTheme} class="theme-switcher">
            <svelte:component this={icon} />
            {theme} mode
        </button>
    </div>
</header>

<style lang="scss">
    .header {
        background-color: var(--colors-el);
        font-size: 16px;

        .container {
            display: flex;
            justify-content: space-between;

            padding: 1.55em 0;
        }
    }

    .theme-switcher {
        text-transform: capitalize;
        font-weight: 600;

        display: flex;
        /* justify-content: center; */
        align-items: center;

        :global(svg) {
            margin-right: 0.4em;
        }
    }

    .title {
        font-size: 1.5em;
    }
</style>

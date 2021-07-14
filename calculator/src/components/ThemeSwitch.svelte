<script lang="ts">
    import { onMount } from 'svelte'

    const themes = ['dark', 'light', 'cyberpunk']
    const labels = [...Array(themes.length).keys()]
    let themeIndex: number

    $: themeIndex >= 0 && setTheme(themes[themeIndex])

    const setTheme = (newTheme: string) => {
        themeIndex = themes.indexOf(newTheme)

        const body = document.querySelector('body').classList

        body.remove(...themes)
        body.add(newTheme)
    }

    const onChange = () => localStorage.setItem('theme', themes[themeIndex])

    onMount(() => {
        const storedTheme = localStorage.getItem('theme') ?? 'dark'
        if (themes.includes(storedTheme)) setTheme(storedTheme)
    })
</script>

<div class="switch">
    <span class="label">theme</span>

    <div class="slider-wrapper">
        <div class="labels">
            {#each labels as count}
                <span>
                    {count + 1}
                </span>
            {/each}
        </div>
        <input
            class="slider"
            type="range"
            name="themes"
            min="0"
            max="2"
            bind:value={themeIndex}
            on:change={onChange}
        />
    </div>
</div>

<style lang="scss">
    .switch {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .label {
        text-transform: uppercase;
        font-size: 12px;
    }

    .slider-wrapper {
        position: relative;
    }

    .labels {
        position: absolute;
        top: -100%;
        left: 1ch;
        right: 1ch;

        display: flex;
        justify-content: space-between;
    }

    @mixin thumb {
        border-radius: 9999px;
        border: 0;
        background-color: var(--colors-key-accent);
        cursor: pointer;
    }

    .slider {
        width: 70px;
        height: 1.5rem;
        padding: 2px 5px;

        background-color: var(--colors-bg-screen);
        border-radius: 9999px;
        -webkit-appearance: none;

        &:-ms-track {
            width: 100%;
            cursor: pointer;

            background: transparent;
            border-color: transparent;
            color: transparent;
        }

        &::-webkit-slider-thumb {
            @include thumb;
            -webkit-appearance: none;
            height: 1rem;
            width: 1rem;
        }

        &::-moz-range-thumb {
            @include thumb;
        }

        &::-ms-thumb {
            @include thumb;
        }
    }
</style>

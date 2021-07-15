<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let value = ''

    const dispatch = createEventDispatcher()

    const keyPress = ({ key }: { key: string }) => {
        if (key === 'Enter') return solve()

        if (key === 'Backspace') return del()

        if (/\d|\+|-|\/|\*|=/.test(key)) {
            value += key
        }
    }

    const solve = () => dispatch('enter', value)

    const reset = () => {
        value = ''
    }

    const del = () => {
        value = value.slice(0, value.length - 1)
    }

    const onClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        value += event.currentTarget.innerHTML.replace('x', '*')
    }
</script>

<svelte:body on:keydown={keyPress} />

<button class="button key" on:click={onClick}>7</button>
<button class="button key" on:click={onClick}>8</button>
<button class="button key" on:click={onClick}>9</button>
<button class="button key mod" on:click={del}>del</button>
<button class="button key" on:click={onClick}>4</button>
<button class="button key" on:click={onClick}>5</button>
<button class="button key" on:click={onClick}>6</button>
<button class="button key" on:click={onClick}>+</button>
<button class="button key" on:click={onClick}>1</button>
<button class="button key" on:click={onClick}>2</button>
<button class="button key" on:click={onClick}>3</button>
<button class="button key" on:click={onClick}>-</button>
<button class="button key" on:click={onClick}>.</button>
<button class="button key" on:click={onClick}>0</button>
<button class="button key" on:click={onClick}>/</button>
<button class="button key" on:click={onClick}>x</button>
<button class="button key wide mod" on:click={reset}>reset</button>
<button class="button key wide accent" on:click={solve}>=</button>

<style lang="scss">
    .key {
        --shadow-color: var(--colors-key-shadow);
        --text-color: var(--colors-text-key);
        --bg-color: var(--colors-key);

        font-size: 0.75em;

        padding: 0.75em 0.75em 0.5em;

        &.mod {
            --shadow-color: var(--colors-key-mod-shadow);
            --text-color: var(--colors-text-key-mod);
            --bg-color: var(--colors-key-mod);

            text-transform: uppercase;
        }

        &.accent {
            --shadow-color: var(--colors-key-accent-shadow);
            --text-color: var(
                --colors-text-key-secondary,
                var(--colors-text-key-mod)
            );
            --bg-color: var(--colors-key-accent);
        }

        &.wide {
            grid-column-end: span 2;
        }
    }
</style>

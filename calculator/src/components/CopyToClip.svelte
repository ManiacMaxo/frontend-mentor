<script lang="ts">
    import { tick } from 'svelte'

    export let value: string = null
    let valueCopy: string = null
    let areaDom

    const copy = async () => {
        valueCopy = value
        if (!valueCopy) return

        await tick()

        areaDom.focus()
        areaDom.select()

        let message = 'Copying text was successful'

        try {
            const successful = document.execCommand('copy')
            if (!successful) {
                message = 'Copying text was unsuccessful'
            }
        } catch (err) {
            message = 'Oops, unable to copy'
        }

        console.log(message)
        valueCopy = null
    }
</script>

<div class="hidden">
    <label for="copy">Copy to Clipboard</label>
    <textarea name="copy" id="copy" bind:this={areaDom}>{valueCopy}</textarea>
</div>
<button class="clipboard" on:click={copy} aria-label="copy to clipboard">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
    </svg>
</button>

<style lang="scss">
    .clipboard {
        --offset: 4px;

        color: var(--colors-text-key-secondary, var(--colors-text));
        background-color: var(--colors-key-accent);
        box-shadow: 0px var(--offset) 0px 0px var(--colors-key-accent-shadow);

        position: absolute;
        top: 50%;
        transform: translateY(calc(-50% - var(--offset)));

        padding: 5px;
        border-radius: 10%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        svg {
            width: 1em;
            height: 1em;
        }

        &:active {
            --offset: 1px;
        }
    }

    .hidden {
        opacity: 0;
        position: absolute;

        * {
            width: 0;
            height: 0;
        }
    }
</style>

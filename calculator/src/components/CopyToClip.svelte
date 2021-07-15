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

<div class="clipboard">
    <div class="hidden">
        <label for="copy">clipboard</label>
        <textarea name="copy" id="copy" bind:this={areaDom}
            >{valueCopy}</textarea
        >
    </div>
    <button
        class="button clipboard-button"
        on:click={copy}
        aria-label="copy to clipboard"
    >
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
</div>

<style lang="scss">
    .clipboard {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .clipboard-button {
        --shadow-color: var(--colors-key-accent-shadow);
        --text-color: var(
            --colors-text-key-secondary,
            var(--colors-text-key-mod)
        );
        --bg-color: var(--colors-key-accent);

        padding: 5px;
        height: calc(1em + 2 * 5px);

        svg {
            width: 1em;
            height: 1em;
        }
    }

    .hidden {
        opacity: 0;

        &,
        * {
            position: absolute;
            top: 0;

            width: 0;
            height: 0;
        }
    }
</style>

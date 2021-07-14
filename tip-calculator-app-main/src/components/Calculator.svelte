<script>
    import { total, persons, tip_percent } from '../stores'

    const reset = () => {
        $total = null
        $tip_percent = null
        $persons = null
    }

    $: disabled = $total === null && $tip_percent === null && $persons === null

    $: tip_per_person = ($total * $tip_percent) / (100 * ($persons || 1)) || 0
    $: amount_per_person = $total / ($persons || 1) + tip_per_person || 0
</script>

<div class="result">
    <div class="group">
        <span class="title">Tip Amount</span>
        <span class="amount">{tip_per_person.toFixed(2)}</span>
    </div>
    <div class="group">
        <span class="title">Total</span>
        <span class="amount">{amount_per_person.toFixed(2)}</span>
    </div>
    <button class="box reset" on:click={reset} {disabled}>Reset</button>
</div>

<style lang="scss">
    .result {
        background-color: var(--colors-accent-500);
        color: var(--colors-secondary);

        border-radius: 15px;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        width: 100%;
    }

    .group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        position: relative;
        width: 10ch;
        height: fit-content;

        &::after {
            content: '/ person';
            color: var(--colors-accent-300);
            position: absolute;
            bottom: -100%;
            left: 0;
        }
    }

    .amount {
        font-size: 2.5em;
        font-weight: bold;

        color: var(--colors-primary);

        &::before {
            content: '$';
        }
    }

    .reset {
        font-size: 1em;
        text-transform: uppercase;
        cursor: pointer;

        margin-top: auto;

        padding-block: 0.75rem;

        background-color: var(--colors-primary);
        color: var(--colors-accent-500);

        &:hover,
        &:focus {
            background-color: var(--colors-accent-200);
            color: var(--colors-accent-500);
        }

        &:disabled {
            background-color: #13686d;
            cursor: default;
        }
    }

    @media screen and (max-width: 800px) {
        .result {
            padding: 2rem 1.5rem 1.5rem;
        }
    }
</style>

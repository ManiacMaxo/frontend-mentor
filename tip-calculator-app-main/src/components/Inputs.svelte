<script>
    import { total, tip_percent, persons } from '../stores'

    let custom_tip = null

    tip_percent.subscribe((val) => {
        if (val == null) {
            custom_tip = null
        }
    })

    const onChangeTotal = (event) => {
        $total = event.target.value || null
    }

    const onChangePersons = (event) => {
        $persons = event.target.value || null
    }

    const onCustomTip = (event) => {
        $tip_percent = event.target.value
        custom_tip = $tip_percent
    }

    const onTipChange = (event) => {
        $tip_percent = event.target.value
        custom_tip = null
    }

    const tips = [5, 10, 15, 25, 50]
</script>

<form class="inputs">
    <label for="bill">
        Bill
        <div
            class="input-group {$total < 0 ? 'error' : ''}"
            data-error="Can't be less than 0"
        >
            <input
                type="number"
                name="bill"
                class="box text-input"
                min="0"
                placeholder="0"
                on:input={onChangeTotal}
                value={$total || ''}
            />
            <img class="input-icon" src="icon-dollar.svg" alt="$" />
        </div>
    </label>
    <label for="tip">
        Select Tip %

        <div class="select-wrapper">
            {#each tips as tip}
                <label for="tip" class="radio-input">
                    <input
                        type="radio"
                        name="tip"
                        value={tip}
                        checked={tip == $tip_percent}
                        on:change={onTipChange}
                    />
                    <span class="box">{tip + '%'}</span>
                </label>
            {/each}
            <input
                type="number"
                name="tip"
                class="box text-input"
                placeholder="Custom"
                value={custom_tip ?? ''}
                on:input={onCustomTip}
            />
        </div>
    </label>

    <label for="people">
        Number of People

        <div
            class="input-group {$persons && $persons < 1 ? 'error' : ''}"
            data-error="Can't be less than 1"
        >
            <input
                type="number"
                name="people"
                class="box text-input"
                placeholder="0"
                on:input={onChangePersons}
                value={$persons || ''}
            />
            <img class="input-icon" src="icon-person.svg" alt="🙋" />
        </div>
    </label>
</form>

<style lang="scss">
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        width: 100%;
    }

    label {
        color: var(--colors-accent-400);
        font-weight: bold;
    }

    .select-wrapper {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: repeat(3, 1fr);

        input {
            font-size: 18px;
        }
    }

    .input-group {
        position: relative;

        .input-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
        }

        &.error {
            $color: #eb3257;

            input {
                border-color: $color;
            }

            &::after {
                content: attr(data-error);
                color: $color;
                position: absolute;
                right: 0;
                top: -45%;
            }
        }
    }

    .text-input {
        position: relative;

        border-width: 2px;
        border-style: solid;
        border-color: transparent;

        color: var(--colors-accent-500);
        background-color: var(--colors-accent-100);

        &[type='number'] {
            text-align: right;
            -moz-appearance: textfield;

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                -webkit-appearance: none;
            }
        }

        &:focus {
            border-color: var(--colors-primary);
        }

        &::placeholder {
            color: var(--colors-accent-300);
        }
    }

    .radio-input {
        position: relative;
        display: flex;

        input[type='radio'] {
            padding: 0;
            margin: 0;

            opacity: 0;
            position: absolute;

            width: 100%;
            height: 100%;

            cursor: pointer;

            &:checked + span {
                background-color: var(--colors-primary);
                color: var(--colors-accent-500);
            }

            &:hover + span,
            &:focus + span {
                background-color: var(--colors-accent-200);
                color: var(--colors-accent-500);
            }
        }

        span {
            padding: 0.25rem;

            background-color: var(--colors-accent-500);
            color: var(--colors-accent-100);

            transition: all 0.2s;
            text-align: center;
        }
    }

    @media screen and (max-width: 450px) {
        .select-wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

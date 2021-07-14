<button class="key">7</button>
<button class="key">8</button>
<button class="key">9</button>
<button class="key mod">del</button>
<button class="key">4</button>
<button class="key">5</button>
<button class="key">6</button>
<button class="key">+</button>
<button class="key">1</button>
<button class="key">2</button>
<button class="key">3</button>
<button class="key">-</button>
<button class="key">.</button>
<button class="key">0</button>
<button class="key">/</button>
<button class="key">x</button>
<button class="key wide mod">reset</button>
<button class="key wide accent">=</button>

<style lang="scss">
    .key {
        --shadow-color: var(--colors-key-shadow);
        --offset: 5px;

        background-color: var(--colors-key);
        box-shadow: 0px var(--offset) 0px 0px var(--shadow-color);
        color: var(--colors-text-key);

        font-size: 0.75em;

        padding: 0.75em 0.75em 0.5em;
        border-radius: 10px;

        &.mod {
            --shadow-color: var(--colors-key-mod-shadow);

            background-color: var(--colors-key-mod);
            color: var(--colors-text);

            text-transform: uppercase;
        }

        &.accent {
            --shadow-color: var(--colors-key-accent-shadow);

            background-color: var(--colors-key-accent);
            color: var(--colors-text-key-secondary, var(--colors-text));
        }

        &.wide {
            grid-column-end: span 2;
        }

        &:active {
            --offset: 1px;
            transform: translateY(4px);
        }
    }
</style>

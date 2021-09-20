<script>
    import SearchIcon from 'carbon-icons-svelte/lib/Search16'
</script>

<div class="input-group">
    <SearchIcon />
    <input type="text" placeholder="Search for a country..." />
</div>

<style lang="scss">
    .input-group {
        background-color: var(--colors-el);
        padding: 1.2rem 1.7rem;
        border-radius: 5px;

        display: flex;
        gap: 1rem;

        max-width: 57ch;

        box-shadow: var(--shadow);

        input {
            width: 100%;

            color: inherit;
            background-color: inherit;

            &:active,
            &:focus {
                border: none;
                outline: none;
            }

            &::placeholder {
                color: var(--colors-subtle);
            }
        }

        &:focus-within {
            box-shadow: 0 0 0 1px blue;
        }
    }
</style>

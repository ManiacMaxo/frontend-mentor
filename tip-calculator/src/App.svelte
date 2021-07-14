<script>
    import Inputs from './components/Inputs.svelte'
    import Calculator from './components/Calculator.svelte'
    import Logo from './components/Logo.svelte'
</script>

<header class="header">
    <Logo />
</header>

<main class="wrapper">
    <Inputs />
    <Calculator />
</main>

<style lang="scss">
    .wrapper {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        background-color: var(--colors-secondary);
        border-radius: 15px;

        max-width: 800px;
        width: 100%;
        height: max-content;
        padding: 1.75rem 2rem;

        display: flex;
        flex-direction: row;
        gap: 2.5rem;
    }

    @media screen and (max-width: 800px) {
        .wrapper {
            flex-direction: column;

            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            top: 100%;
            transform: translate(-50%, -100%);
        }
    }

    .header {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width: 450px) {
        .header {
            top: 7.5%;
        }
    }
</style>

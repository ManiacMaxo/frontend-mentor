<script lang="ts">
    import { Header, Search, Filter, Card } from './components'
    import { fetchCountries } from './utils'

    // fetchCountry('Bulgaria')

    let query = fetchCountries()
</script>

<Header />
<main>
    <header class="container">
        <Search />
        <Filter />
    </header>
    <div class="countries container">
        {#await query}
            <p>Loading...</p>
        {:then countries}
            {#each countries as country}
                <Card {country} />
            {/each}
        {/await}
    </div>
</main>

<style global>
    .container {
        width: min(90%, 1440px);
        margin: 0 auto;
    }

    main {
        margin-top: 3rem;
    }

    .countries {
        margin-top: 3rem;
        display: grid;

        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;
    }

    @media (min-width: 768px) {
    }
</style>

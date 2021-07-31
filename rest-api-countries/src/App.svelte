<script script lang="ts">
    import Header from './components/Header.svelte'
    import Search from './components/Search.svelte'
    import Filter from './components/Filter.svelte'
    import Card from './components/Card.svelte'

    import { fetchCountry } from './utils'

    let countries = []

    fetchCountry('Bulgaria').then((res) => {
        console.log(res)
    })
</script>

<Header />
<main>
    <header class="container">
        <Search />
        <Filter />
    </header>
    <div class="countries container">
        {#each countries as country}
            <Card data={country} />
        {/each}
    </div>
</main>

<style global>
    .container {
        width: min(89%, 1440px);
        margin: 0 auto;
    }
</style>

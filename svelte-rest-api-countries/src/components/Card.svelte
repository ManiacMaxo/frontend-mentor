<script lang="ts">
    import type { Country } from '../utils'

    export let country: Country
</script>

<div class="card">
    <div class="flag" style={`background-image: url(${country.flag})`} />
    <div class="content">
        <h3>{country.name}</h3>

        <ul>
            <li>
                Population:
                <span>
                    {country.population}
                </span>
            </li>
            <li>
                Region: <span>
                    {country.region}
                </span>
            </li>
            <li>
                Capital: <span>
                    {country.capital}
                </span>
            </li>
        </ul>
    </div>
</div>

<style lang="scss">
    .card {
        width: 100%;
        background-color: var(--colors-el);
        box-shadow: var(--shadow);

        border-radius: 5px;
        overflow: hidden;

        ul {
            list-style: none;
            font-weight: 600;
        }
    }

    .flag {
        width: 100%;
        aspect-ratio: 1.9;

        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .content {
        padding: 1.5rem;
        padding-bottom: 2.2rem;

        h3 {
            margin-bottom: 0.5rem;
        }

        span {
            font-weight: 300;
            // color: var(--colors-subtle);
        }
    }
</style>

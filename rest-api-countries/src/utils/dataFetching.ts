import { Country, CountryDetail, ResponseCountry } from './types'

const API_URL = 'https://restcountries.eu/rest/v2/'
const API_URL_FIELDS = '?fields=name;population;region;capital;flag'
const API_URL_FIELDS_DETAILS = `${API_URL_FIELDS};nativeName;subRegion;topLevelDomain;currencies;languages;borders`

export const fetchCountry = async (code: string): Promise<CountryDetail> => {
    const res = await fetch(API_URL + 'alpha/' + code + API_URL_FIELDS_DETAILS)

    if (res.status === 404) throw new Error('Country does not exist')
    else if (res.status !== 200)
        throw new Error('Failed fetching data from API')

    const data: ResponseCountry = await res.json()

    return {
        ...data,
        topLevelDomain: data.topLevelDomain[0],
        currencies: data.currencies.map((currency) => currency.name),
        languages: data.languages.map((language) => language.name)
    }
}

export const fetchCountries = async (): Promise<Country[]> => {
    const res = await fetch(API_URL + 'all' + API_URL_FIELDS)
    const jsonRes: ResponseCountry[] = await res.json()

    return jsonRes
}

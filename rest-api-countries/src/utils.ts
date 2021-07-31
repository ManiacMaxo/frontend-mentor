interface Currency {
    code: string
    name: string
    symbol: string
}

interface Language {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}

interface RegionalBlock {
    acronym: string
    name: string
    otherAcronyms: string[]
    otherNames: string[]
}

export interface ResponseCountry {
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    alpha3Code: string
    callingCodes: string[]
    capital: string
    altSpellings: string[]
    region: string
    subRegion: string
    population: number
    latlng: number[]
    demonym: string
    area: number
    gini: number | null
    timezones: string[]
    borders: string[]
    nativeName: string
    numericCode: string
    currencies: Currency[]
    languages: Language[]
    translations: Map<string, string>
    flag: string
    regionalBlocs: RegionalBlock[]
    cioc: string
}

export interface Country {
    name: string
    nativeName: string
    population: number
    region: string
    subRegion: string
    capital: string
    topLevelDomain: string
    currencies: string[]
    languages: string[]
    borders: string[]
}

const API_URL = 'https://restcountries.eu/rest/v2/'
const API_URL_FIELDS =
    '?fields=name;nativeName;population;region;subRegion;topLevelDomain;capital;currencies;languages;borders'

export const fetchCountry = async (name: string): Promise<Country> => {
    const res = await fetch(
        API_URL + `name/${name}` + API_URL_FIELDS + '&fullText=true'
    )

    const jsonRes: ResponseCountry = await res.json()
    const data = jsonRes[0]

    return {
        ...data,
        topLevelDomain: data.topLevelDomain[0],
        currencies: data.currencies.map((currency) => currency.name),
        languages: data.languages.map((language) => language.name)
    }
}

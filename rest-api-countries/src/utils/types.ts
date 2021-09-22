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
    population: number
    region: string
    capital: string
    flag: string
}

export interface CountryDetail extends Country {
    nativeName: string
    subRegion: string
    topLevelDomain: string
    currencies: string[]
    languages: string[]
    borders: string[]
}

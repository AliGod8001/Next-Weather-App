interface CurrentWeather {
    temp: number,
    tempMin: number,
    tempMax: number,
    desc: string,
    windDirection: number,
    windSpeed: number
}

interface WeatherHistory {
    period: string,
    infos: WeatherInfo[]
}

interface WeatherInfo {
    time: string,
    weatherCode: number,
    minTemp: number,
    maxTemp: number,
    rainSum: number,
}

type Period = "daily" | "hourly"

interface UserStore {
    loading: boolean,
    city: string,
    lat: number,
    long: number,
    period: Period,
    offset: numbr,
    weatherHistory: WeatherInfo[] | null,
    currentWeather: CurrentWeather | null,
    setInitialValues: (payload: LocalStorageState) => void,
    changeCity: (payload: ChangeCityPayload) => void,
    changePeriod: (payload: Period) => void,
    getWeather: () => void,
}

type ChangeCityPayload = {
    city: string;
    lat: number,
    long: number,
    offset?: number,
}

interface GeocodeInfo {
    id: number,
    name: string,
    country: string,
    lat: number,
    long: number
}

type ButtonType = "primary" | "primary-outline" | "primary-flat" | "secondary" | "secondary-outline" | "secondary-flat"

interface LocalStorageState {
    city: string,
    offset: number,
    lat: number,
    long: number,
    period: Period,
}

type LocalStorageType = "city" | "lat" | "long" | "period" | "offset" 
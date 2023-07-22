interface CurrentWeatherResponse {
    base: string,
    clouds: CloudsRes,
    cod: number,
    coord: CoordRes,
    dt: number,
    id: number,
    main: MainRes,
    name: string,
    sys: SysRes,
    timezone: number,
    visibility: number,
    weather: WeatherRes[],
    wind: WindRes
}

interface CloudsRes {
    all: number
}

interface CoordRes {
    lat: number,
    long: number
}

interface MainRes {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    grnd_level: number,
    pressure: number,
    sea_level: number
}

interface SysRes {
    country: string,
    sunrise: number,
    sunset: number
}

interface WeatherRes {
    id: number,
    description: string,
    icon: string,
    main: string
}

interface WindRes {
    speed: number,
    deg: number,
    gust: number
}
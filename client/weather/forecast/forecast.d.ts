interface DailyForecastResponse {
    daily: Daily,
    daily_units: DailyUnits, 
    elevation: number,
    generationtime_ms: number,
    latitude: number,
    longitude: number,
    timezone: string,
    timezone_abbreviation: string,
    utc_offset_seconds: number
}

interface HourlyForecastResponse {
    elevation: number,
    generationtime_ms: number,
    hourly: Hourly,
    hourly_units: HourlyUnits,
    latitude: number,
    longitude: number,
    timezone: string,
    timezone_abbreviation: string,
    utc_offset_seconds: number
}

interface Hourly {
    rain: number[]
    temperature_2m: number[],
    time: string[],
    weathercode: number[]
}

interface HourlyUnits {
    rain: string,
    temperature_2m: strgin,
    time: string,
    weathercode: string
}

type Daily = {
    rain_sum: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    time: string[],
    weathercode: number[]
}

type DailyUnits = {
    rain_sum: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
    time: string,
    weathercode: string
}

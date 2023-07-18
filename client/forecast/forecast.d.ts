interface DailyForecastResponse {
    current_weather: CurrentWeatherResponse,
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

interface CurrentWeatherResponse {
    is_day: boolean,
    temperature: number,
    time: string,
    weathercode: number,
    winddirection: number,
    windspeed: number
}
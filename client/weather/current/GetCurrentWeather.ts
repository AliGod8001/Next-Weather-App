const GetCurrentWeather = async (lat: number, long: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CURRENT_WEATHER_URL}/weather?appid=${process.env.NEXT_PUBLIC_CURRENT_WEATHER_API_KEY}&lat=${lat}&lon=${long}`)

    const data : CurrentWeatherResponse = await res.json()

    const currentTime = new Date().getTime()
    const isDay = currentTime > data.sys.sunrise && currentTime < data.sys.sunset


    const currentWeather : CurrentWeather = {
        isDay,
        windDirection: data.wind.deg,
        windSpeed: data.wind.speed,
        temp: data.main.temp,
        desc: data.weather[0].description,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,

    }

    return currentWeather;
}

export default GetCurrentWeather;
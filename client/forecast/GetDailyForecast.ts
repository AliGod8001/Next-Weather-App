const GetDailyForecast = async (lat: number, long: number) => {
    const url = `${process.env.NEXT_PUBLIC_FETCH_URL}/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&daily=rain_sum&daily=temperature_2m_max&daily=temperature_2m_min&current_weather=true&timezone=GMT`
    let res = await fetch(url)

    const data : DailyForecastResponse = await res.json()

    const currentWeather : CurrentWeather = {
        isDay: data.current_weather.is_day,
        temp: data.current_weather.temperature,
        weatherCode: data.current_weather.weathercode,
        windDirection: data.current_weather.winddirection,
        windSpeed: data.current_weather.windspeed
    }

    const dailyInfos : WeatherInfo[] = []

    for (let i = 0; i <= data.daily.rain_sum.length - 1 ; i++) {
        const info : WeatherInfo = {
            maxTemp: data.daily.temperature_2m_max[i],
            minTemp: data.daily.temperature_2m_min[i],
            time: data.daily.time[i],
            weatherCode: data.daily.weathercode[i],
            rainSum: data.daily.rain_sum[i]
        }

        dailyInfos.push(info)
    }

    const dailyHistory : WeatherHistory = {
        period: "daily",
        infos: dailyInfos
    }

    return  { currentWeather, dailyHistory }
}

export default GetDailyForecast;
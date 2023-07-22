const GetDailyForecast = async (lat: number, long: number) => {
    const url = `${process.env.NEXT_PUBLIC_WEATHER_URL}/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&daily=rain_sum&daily=temperature_2m_max&daily=temperature_2m_min&timezone=GMT`
    let res = await fetch(url)

    const data : DailyForecastResponse = await res.json()

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

    return dailyHistory
}

export default GetDailyForecast;
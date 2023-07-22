const GetHourlyForecast = async (lat: number, long: number) => {
    const url = `${process.env.NEXT_PUBLIC_WEATHER_URL}/forecast?latitude=${lat}&longitude=${long}&forecast_hourly=24&hourly=weathercode&hourly=rain&hourly=temperature_2m`
    let res = await fetch(url)

    const data : HourlyForecastResponse = await res.json()

    const hourlyInfos : WeatherInfo[] = []
    for (let i = 0; i <= 24 ; i++) {
        const info : WeatherInfo = {
            maxTemp: data.hourly.temperature_2m[i],
            minTemp: data.hourly.temperature_2m[i],
            time: data.hourly.time[i],
            weatherCode: data.hourly.weathercode[i],
            rainSum: data.hourly.rain[i]
        }

        hourlyInfos.push(info)
    }

    
    return hourlyInfos
}


export default GetHourlyForecast;
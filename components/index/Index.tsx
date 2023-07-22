import WeatherCurrent from "../weather/current/WeatherCurrent";
import WeatherList from "../weather/list/WeatherList";

const Index = ({
    current,
    history,
    isDay,
} : {
    current: CurrentWeather,
    history: WeatherInfo[],
    isDay: boolean,
}) => {

    

    return <>
        <WeatherCurrent currentData={current} isDay={isDay} />
        <WeatherList list={history} />
    </>
}

export default Index;
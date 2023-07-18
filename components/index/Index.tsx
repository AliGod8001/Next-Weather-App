import Loading from "../ui/loading/Loading";
import WeatherCurrent from "../weather/current/WeatherCurrent";
import WeatherList from "../weather/list/WeatherList";

const Index = ({
    current,
    history
} : {
    current: CurrentWeather | null,
    history: WeatherInfo[] | null
}) => {

    

    return <>
    {
        current && history 
            ? 
            <>
                <WeatherCurrent currentData={current} />
                <WeatherList list={history} />
            </>
            : <Loading />
    }
    </>
}

export default Index;
import Loading from "../ui/loading/Loading";
import WeatherCurrent from "../weather/current/WeatherCurrent";
import WeatherList from "../weather/list/WeatherList";

const Index = ({
    current,
    history,
    loading,
} : {
    current: CurrentWeather | null,
    history: WeatherInfo[] | null,
    loading: boolean,
}) => {

    

    return <>
    {
        current && history
            ? loading ? <Loading /> :
            <>
                <WeatherCurrent currentData={current} />
                <WeatherList list={history} />
            </>
            : <Loading />
    }
    </>
}

export default Index;
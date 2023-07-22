"use client"

import { useEffect } from "react";
import { useUserStore } from "@/store/user-store";

import UseConvertTime from "@/hooks/use-convert-time";

import Index from "@/components/index/Index"
import Overlay from "@/components/overlay/Overlay";
import Loading from "@/components/ui/loading/Loading";

const HomePage = () => {
    const [getWeather, current, history, offset, loading] = useUserStore(state => [state.getWeather, state.currentWeather, state.weatherHistory, state.offset, state.loading])

    const time = UseConvertTime(offset)
    const isDay = time.getHours() > 6 && time.getHours() < 19

    useEffect(() => {
        getWeather()
    }, [getWeather])

  return <section className={isDay ? "day" : "night"}>
      {
        current && history
        ? loading 
        ? <Loading /> 
        : <Index current={current} history={history} isDay={isDay} />
        : <Loading />
      }
      <Overlay />
  </section>
}

export default HomePage
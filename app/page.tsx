"use client"

import { useEffect, useState } from "react";
import { useUserStore } from "@/store/user-store";

import Index from "@/components/index/Index"
import Overlay from "@/components/overlay/Overlay";

const convertTime = (offset: number) => {
    const offsetTime = new Date(2023, 6, 18, new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds())
    return new Date(offsetTime.getTime() + offset * 60 * 60 * 1000)
}

const HomePage = () => {
    const [getWeather, current, history, offset] = useUserStore(state => [state.getWeather, state.currentWeather, state.weatherHistory, state.offset])

    const time = convertTime(offset)

    useEffect(() => {
        getWeather()
    }, [getWeather])

  return <section className={!current ? time.getHours() > 7 && time.getHours() < 19 ? "day": "night" : current.isDay ? "day" : "night"}>
      <Index current={current} history={history} />
      <Overlay />
  </section>
}

export default HomePage
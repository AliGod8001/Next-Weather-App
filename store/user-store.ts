import { create } from 'zustand'

import GetDailyForecast from '@/client/forecast/GetDailyForecast'

const getInitailStoreState = (type: LocalStorageType) => {
    if ( !localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!) ) {
        setInitialStoreState({
            city: "Paris",
            lat: 52.52,
            long: 13.41,
            period: "daily",
            offset: 2,
        })
    }

    const item : LocalStorageState = JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!)!)

    switch (type) {
        case "city":
            return item.city
    
        case "lat":
            return item.lat

        case "long":
            return item.long

        case "period":
            return item.period

        case "offset":
            return item.offset
    }
}

const setInitialStoreState = (payload: LocalStorageState) => {
    localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!, JSON.stringify(payload))
}

export const useUserStore = create<UserStore>()((set) => ({
    city: getInitailStoreState("city") as string,
    lat: getInitailStoreState("lat") as number,
    long: getInitailStoreState("long") as number,
    period: getInitailStoreState("period") as Period,
    offset: getInitailStoreState("offset") as number,
    currentWeather: null,
    weatherHistory: null,
    changeCity: async (payload: ChangeCityPayload) => {
        set(() => ({city: payload.city, lat: payload.lat, long: payload.long, offset: payload.offset}))
        setInitialStoreState({
            city: payload.city,
            lat: payload.lat,
            long: payload.long,
            period: useUserStore.getState().period,
            offset: payload.offset!
        })
        useUserStore.getState().getWeather()
    },
    getWeather: async () => { 
        if ( useUserStore.getState().period === "daily" ) {
            const { currentWeather, dailyHistory} = await GetDailyForecast(useUserStore.getState().lat, useUserStore.getState().long)
            set(() => ({currentWeather: currentWeather}))
            set(() => ({weatherHistory: dailyHistory.infos}))
        } else {
            console.log('here')
        }
    }
}))
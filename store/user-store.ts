import { create } from 'zustand'

import GetDailyForecast from '@/client/weather/forecast/GetDailyForecast'
import GetHourlyForecast from '@/client/weather/forecast/GetHourlyForecast'
import GetCurrentWeather from '@/client/weather/current/GetCurrentWeather'

const setInitialStoreState = (payload: LocalStorageState) => {
    localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY!, JSON.stringify(payload))
}

export const useUserStore = create<UserStore>()((set) => ({
    loading: false,
    city: null,
    lat: null,
    long: null,
    period: null,
    offset: null,
    currentWeather: null,
    weatherHistory: null,
    setInitialValues: (payload: LocalStorageState) => {
        set(() => ({
            city: payload.city,
            lat: payload.lat,
            long: payload.long,
            period: payload.period,
            offset: payload.offset
        }))
    },
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
    changePeriod: async (period: Period) => {
        set(() => ({ period: period }))

        setInitialStoreState({
            city: useUserStore.getState().city,
            lat: useUserStore.getState().lat,
            long: useUserStore.getState().long,
            period: period,
            offset: useUserStore.getState().offset!
        })

        useUserStore.getState().getWeather()
    },
    getWeather: async () => { 
        set(() => ({ loading: true }))
        const currentWeather = await GetCurrentWeather(useUserStore.getState().lat, useUserStore.getState().long)
        set(() => ({ currentWeather: currentWeather }))
        
        if ( useUserStore.getState().period === "daily" ) {
            const dailyHistory = await GetDailyForecast(useUserStore.getState().lat, useUserStore.getState().long)
            set(() => ({ weatherHistory: dailyHistory.infos }))
        } else {
            const hourlyHistory = await GetHourlyForecast(useUserStore.getState().lat, useUserStore.getState().long)
            set(() => ({ weatherHistory: hourlyHistory}))
        }
        set(() => ({ loading: false }))
    }
}))
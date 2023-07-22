"use client"
import { useState } from 'react'
import { useUserStore } from '@/store/user-store'

import OverlayClock from './OverlayClock'
import OverlayCity from './OverlayCity'
import OverlayTime from './OverlayTime'

import styles from './Overlay.module.scss'
import GetTimeOffset from '@/client/timezone/GetCurrentTime'
import Loading from '../ui/loading/Loading'

const Overlay = () => {
    const [loading, SetLoading] = useState<boolean>(false)
    const [city, changeCity, offset, period, changePeriod] = useUserStore(state => [state.city, state.changeCity, state.offset, state.period, state.changePeriod])

    const changeCityClickHandler = async (payload: ChangeCityPayload) => {
        SetLoading(true)
        const offset = await GetTimeOffset(payload.city)
        payload.offset = offset
        SetLoading(false)
        changeCity(payload)
    }

    const changePeriodHandler = () => {
        changePeriod(period === "daily" ? "hourly" : "daily")
    }

    return <>
        {loading ? <Loading /> : (
            <div className={styles.overlay}>
            {/* <OverlayClock offset={offset} />     */}
            <OverlayCity city={city} onChangeCity={changeCityClickHandler} />
            <OverlayTime period={period} onChangePeriod={changePeriodHandler} />
        </div>
        )}
    </>
    
}

export default Overlay;
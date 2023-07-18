"use client"
import { useState } from 'react'
import { useUserStore } from '@/store/user-store'

import OverlayClock from './OverlayClock'
import OverlayCity from './OverlayCity'

import styles from './Overlay.module.scss'
import GetTimeOffset from '@/client/timezone/GetCurrentTime'
import Loading from '../ui/loading/Loading'

const Overlay = () => {
    const [loading, SetLoading] = useState<boolean>(false)
    const [city, changeCity, offset] = useUserStore(state => [state.city, state.changeCity, state.offset])

    const changeCityClickHandler = async (payload: ChangeCityPayload) => {
        SetLoading(true)
        const offset = await GetTimeOffset(payload.city)
        payload.offset = offset
        changeCity(payload)
        SetLoading(false)
    }

    return <>
        {loading ? <Loading /> : (
            <div className={styles.overlay}>
            <OverlayClock offset={offset} />    
            <OverlayCity city={city} onChangeCity={changeCityClickHandler} />
        </div>
        )}
    </>
    
}

export default Overlay;
import { ChangeEvent, useState } from 'react'
import { Modal  } from 'antd'
import GetGeocode from '@/client/geocoding/GetGeocode'
import MainButton from '../ui/button/MainButton'

import styles from './OverlayCity.module.scss'
import Loader from '../ui/loader/Loader'
import CityList from '../city/CityList'
import NotFound from '../ui/not-found/NotFound'

const OverlayCity = ({
    city,
    onChangeCity,
} : {
    city: string,
    onChangeCity: (payload: ChangeCityPayload) => void,
}) => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)
    const [data, setData] = useState<GeocodeInfo[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [isModalOpen, setIsModelOpen] = useState<boolean>(false)

    const cityClickHandler = (payload: ChangeCityPayload) => {
        onChangeCity(payload)
        handleCancel()
    }

    const cityInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchValue(e.target.value)

        if ( e.target.value.length < 2 ) return
        
        clearTimeout(timer!)
        
        const newTimer = setTimeout(async () => {
            setData([])
            setLoading(true)
            const res = await GetGeocode(e.target.value)
            setData(res)
            setLoading(false)
        }, 500)

        setTimer(newTimer)
    }

    const showModal = () => {
        setIsModelOpen(true);
    };
    
    const handleOk = () => {
        setIsModelOpen(false);
        setData([])
        setSearchValue("")
    };
    
    const handleCancel = () => {
        setIsModelOpen(false);
        setData([])
        setSearchValue("")
    };

    return <>
        <div className={styles.city} onClick={showModal}>{city}</div>

        <Modal title="Choose City" open={isModalOpen} footer={null}>
        <form className={styles.form}>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input 
                    type='text' 
                    id='city'
                    value={searchValue}
                    onChange={cityInputChangeHandler}
                    autoFocus={true}
                    placeholder='choose your city...'
                />
            </div>
        </form>
        {!data.length && loading && <Loader type='secondary' />}
        {data.length > 0 && !loading && <CityList listInfos={data} onCityClick={cityClickHandler} />}
        {!loading && data.length === 0 && <NotFound>City</NotFound>}

        <div className={styles.actions}>
            <MainButton type='primary' onClick={handleOk}>Ok</MainButton>
            <MainButton type='secondary-outline' onClick={handleCancel}>cancel</MainButton>
        </div>
    </Modal>
    </>
}

export default OverlayCity
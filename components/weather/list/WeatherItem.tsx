import Image from 'next/image'
import useWeatherCode from '@/hooks/use-weather-code'
import useGetDay from '@/hooks/use-get-day'

import GlassCard from '@/components/ui/galss-card/GlassCard'
import styles from './WeatherItem.module.scss'

const WeatherItem = ({
    info,
    active,
} : {
    info: WeatherInfo,
    active: boolean
}) => {
    const { weather, weatherImage } = useWeatherCode(info.weatherCode)
    const day = useGetDay(info.time)

    return <li className={`${styles['item-wrapper']} ${active ? styles.active : ""}`}>
        <GlassCard className={styles.item}>
            <Image 
                className={styles.img}
                src={weatherImage}
                width={50}
                height={50}
                loading='lazy'
                alt='item image'
            />
            <span className={styles.day}>
                {day}
            </span>
            <div className={styles.weather}>{weather}</div>
            <div className={styles.tempture}>
                <div className={`${styles.box} ${styles.min}`}>{info.minTemp}</div>
                \
                <div className={styles.box}>{info.maxTemp}</div>
            </div>
        </GlassCard>
    </li>
}

export default WeatherItem
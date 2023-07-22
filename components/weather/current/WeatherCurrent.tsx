import Image from 'next/image'

import GlassCard from '../../ui/galss-card/GlassCard'

import { temptureImage, sunWindyImage, moonWindyImage } from '@/public/images'
import styles from './WeatherCurrent.module.scss'

const WeatherCurrent = ({
    currentData,
    isDay,
} : {
    currentData: CurrentWeather
    isDay: boolean,
}) => {
    return <GlassCard className={styles.current}>
        <Image
            className={styles.img}
            src={`/images/${isDay ? "sun" : "moon"}.png`}
            width={80} 
            height={80}
            loading='lazy'
            alt={`${isDay ? "sun" : "moon"} image`}
        />
        <span className={styles.text}>Today</span>
        <span className={styles.title}>{currentData.desc}</span>
        <div className={styles["box-wrapper"]}>
            <div className={styles.box}>
                <Image 
                    src={temptureImage}
                    width={45}
                    height={45}
                    loading='lazy'
                    alt='tempture image'
                />
                <div className={styles.content}>
                    <span className={styles.title}>Tempture :</span>
                    <span className={styles.text}>{currentData.temp} C</span>
                </div>
            </div>
            <div className={styles.box}>
                <Image 
                    src={isDay ? sunWindyImage : moonWindyImage}
                    width={45}
                    height={45}
                    loading='lazy'
                    alt={`${isDay ? "sun" : "moon"} windy image`}
                />
                <div className={styles.content}>
                    <span className={styles.title}>Wind Speed :</span>
                    <span className={styles.text}>{currentData.windSpeed}</span>
                </div>
            </div>
        </div>
        <div className={styles['wind-direction']}>
            <div className={styles.indicator} style={{ transform: `translate(-50%, -50%) rotate(${currentData.windDirection}deg)`}}></div>
        </div>
    </GlassCard>
}

export default WeatherCurrent;
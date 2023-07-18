import { useState } from 'react';

import WeatherItem from './WeatherItem';
import styles from './WeatherList.module.scss'

const WeatherList = ({
    list
} : {
    list: WeatherInfo[]
}) => {
    const [active, setActive] = useState<boolean>(false)

    setTimeout(() => {
        setActive(true)
    }, 750);

    return <ul className={styles.list}>
        {
            list.map((info, index) => (
                <WeatherItem key={index} info={info} active={active} />
            ))
        }
    </ul>
}

export default WeatherList;
import { useState, useEffect, useCallback } from 'react';

import styles from './OverlayClock.module.scss'

const prefixClock = (clock: number) => {
    return (clock < 10 ? '0' : '') + clock
}

const convertTime = (offset: number) => {
    const offsetTime = new Date(2023, 6, 18, new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds())
    return new Date(offsetTime.getTime() + offset * 60 * 60 * 1000)
}

const OverlayClock = ({
    offset
} : {
    offset: number
}) => {
    const [date, setDate] = useState<Date>(convertTime(offset))
    
    useEffect(() => {    
        const interval = setInterval(() => {
            setDate(convertTime(offset))
        }, 1000)

        return() => {
            clearInterval(interval)
        }
    }, [date, offset])

    return <>
        <div className={styles.clock}>
            {prefixClock(date.getHours())} 
            :
            {prefixClock(date.getMinutes())}
            :
            {prefixClock(date.getSeconds())}
        </div>
    </>
}

export default OverlayClock;
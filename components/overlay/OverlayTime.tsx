import { useState } from 'react'

import { ChangeEvent } from 'react'
import styles from './OverlayTime.module.scss'

const OverlayTime = ({
    period,
    onChangePeriod
} : {
    period: Period,
    onChangePeriod: () => void
}) => {
    const [checked, setChecked] = useState<boolean>(period === "hourly")

    const periodChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(prevState => {
            return !prevState
        })

        onChangePeriod()
    }

    return <>
        <div className={styles.toggleWrapper}>
            <input type="checkbox" className={styles.dn} id="dn" checked={checked} onChange={periodChangeHandler} />
            <label htmlFor="dn" className={styles.toggle}>
                <span className={styles["toggle__handler"]}>
                    <span className={styles["crater crater--1"]}></span>
                    <span className={styles["crater crater--2"]}></span>
                    <span className={styles["crater crater--3"]}></span>
                </span>
            </label>
        </div>
    </>
}

export default OverlayTime;
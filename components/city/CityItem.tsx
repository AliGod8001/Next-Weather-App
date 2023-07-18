import styles from './CityItem.module.scss'

const CityItem = ({
    data,
    onCityItemClick
} : {
    data: GeocodeInfo,
    onCityItemClick: (payload: ChangeCityPayload) => void
}) => {
    const cityClickHandler = () => {
        onCityItemClick({
            city: data.name,
            lat: data.lat,
            long: data.long
        })
    }


    return <li className={styles.item} onClick={cityClickHandler}>
        <div>
            <span className={styles.text}>City: </span>
            <span className={`${styles.title} ${styles.city}`}>{data.name}</span>
        </div>
        <div>
            <span className={styles.text}>Country: </span>
            <span className={styles.title}>{data.country}</span>
        </div>
    </li>
}

export default CityItem
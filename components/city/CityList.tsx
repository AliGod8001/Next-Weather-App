import CityItem from './CityItem'

import styles from './CityList.module.scss'

const CityList = ({
    listInfos,
    onCityClick,
} : {
    listInfos: GeocodeInfo[]
    onCityClick: (payload: ChangeCityPayload) => void
}) => {
    return <ul className={styles.list}>
        {
            listInfos.map(info => <CityItem key={info.id} data={info} onCityItemClick={onCityClick} />)
        }
    </ul>
}

export default CityList;
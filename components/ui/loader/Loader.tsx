import styles from './Loader.module.scss'

const Loader = ({
    type
} : {
    type: "primary" | "secondary"
}) => {
    const classes = `${styles.loader} ${styles[type]}`

    return <div className={classes}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Loader;
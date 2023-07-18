/* other imports */
import styles from './MainButton.module.scss'

const convertType = (type: string) => {
    switch (type) {
        case "primary-outline" :
            return styles['primary-outline']

        case "primary-flat" :
            return styles['primary-flat']

        case "secondary" :
            return styles.secondary

        case "secondary-outline" :
            return styles['secondary-outline']

        case "secondary-flat" :
            return styles['secondary-flat']
    
        default :
            return styles.primary;
    }
}

const MainButton = ({
    children,
    type,
    className,
    onClick,
    disabled,
} : {
    children: string | JSX.Element | JSX.Element[],
    type: ButtonType,
    className?: string | string[],
    onClick?: () => void,
    disabled?: boolean,
}) => {
    const classes = `${styles.button} ${convertType(type)} ${Array.isArray(className) ? className.join(' ') : className}`
    
    const buttonClickHandler = () => {
        onClick !== undefined ? onClick() : null
    }

    return <button className={`${classes}`} disabled={disabled} onClick={buttonClickHandler} >
        {children}
    </button>
}

export default MainButton;
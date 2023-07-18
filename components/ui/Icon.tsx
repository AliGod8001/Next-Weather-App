const Icon = ({
    icon,
    className,
    onClick,
} : {
    icon: String,
    className?: string
    onClick?: () => void
}) => {
    const classes = `icon-${icon} ${className}`
    
    if (onClick) {
        const iconClickHandler = () => {
            onClick()
        }
        
        return <i onClick={iconClickHandler} className={classes}></i>
    }

    return <i className={classes}></i>
}

export default Icon
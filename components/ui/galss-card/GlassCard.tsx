import React from 'react'
import styles from './GlassCard.module.scss'

const GlassCard = ({
    children,
    className
} : {
    children: React.ReactNode,
    className?: string
}) => {
    const classes = `${styles.card} ${className}`
    
    return <div className={classes}>{children}</div>
}

export default GlassCard;
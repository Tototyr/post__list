import React from 'react'

import styles from './Button.module.scss'

export function Button() {
    return (
        <button className={styles.button} type="submit">
            <p className={styles.button_text}>Next page</p>
        </button>
    )
}
import React from 'react'

import styles from './users_links.module.scss'

export function UsersLinks() {
    return (
        <a className={styles.users_links} href="">
            <img className={styles.avatar} alt="" />
            <div className={styles.link_text}>Leanne Graham</div>
        </a>
    )
}
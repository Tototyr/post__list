import React from 'react'

import styles from './posts_card.module.scss'

export function PostsCard() {
    return (
        <a className={styles.card_container}>
            <h2 className={styles.card_title}>
                Sunt aut facere repellat provident occaecati excepturi optio
                reprehenderit
            </h2>
            <p className={styles.card_text}>
                Quia et suscipit suscipit recusandae consequuntur expedita et
                cum reprehenderit molestiae ut ut quas totam nostrum rerum est
                autem sunt rem eveniet architecto
            </p>
        </a>
    )
}
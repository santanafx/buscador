import React from 'react'
import styles from './Results.module.css'

export const Results = () => {
    return (
        <div className={styles.sector}>
            <div className={styles.container}>
                <span>Cidade</span>
                <span>Bairro</span>
                <span>Rua</span>
                <span>Numero</span>
                <span>Complemento</span>
            </div>
        </div>
    )
}

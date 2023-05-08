import React from 'react'
import styles from './Results.module.css'

export const Results = ({ cep }) => {
    return (
        <div className={styles.sector}>
            <div className={styles.container}>
                <h2>CEP: {cep.cep}</h2>
                <span>Cidade: {cep.localidade}</span>
                <span>Bairro: {cep.bairro}</span>
                <span>Rua: {cep.logradouro}</span>
                <span>Estado: {cep.uf}</span>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './Sobre.module.css'
import { Head } from './Head'

export const Sobre = () => {
    return (
        <>
            <Head title='CEP | Sobre' />
            <div className={styles.container}>Site para botar em prática o uso da linguagem react.</div>
        </>
    )
}

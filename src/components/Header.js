import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'


export const Header = () => {
    return (
        <div className={styles.container}>
            <h1>Buscador de CEP</h1>
            <NavLink className={styles.navlink} to='/' end>Início</NavLink>
            <NavLink className={styles.navlink} to='/sobre' end>Sobre</NavLink>
        </div>
    )
}

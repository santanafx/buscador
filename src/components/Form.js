import React from 'react'
import styles from './Form.module.css'
import { BsSearch } from "react-icons/bs";
import { Results } from './Results';

export const Form = () => {

    const [dado, setDado] = React.useState();

    return (
        <>
            <div className={styles.sector}>
                <div className={styles.container}>
                    <label htmlFor="cep">Buscador de CEP</label>
                    <input type="text" placeholder="Digite seu CEP" id='cep' onChange={(event) => setDado(event.target.value)} />
                    <div className={styles.botao}>
                        <button id='botao'>Procurar CEP</button>
                        <label htmlFor='botao'><BsSearch /></label>
                    </div>
                </div>
            </div>
            <Results cep={dado} />
        </>
    )
}

import React from 'react'
import styles from './Form.module.css'
import { BsSearch } from "react-icons/bs";
import { Results } from './Results';

export const Form = () => {

    const [dado, setDado] = React.useState('');
    const [cep, setCep] = React.useState('');

    async function handleClick() {

        try {
            const response = await fetch(`https://viacep.com.br/ws/${dado}/json/`);
            const responseJson = await response.json();
            setCep(responseJson);
            setDado('');

        } catch {
            alert('Não foi possível buscar este CEP.');
            setDado('');
        }

    }

    return (
        <>
            <div className={styles.sector}>
                <div className={styles.container}>
                    <label htmlFor="cep">Buscador de CEP</label>
                    <input type="text" placeholder="Digite seu CEP" value={dado} onChange={(event) => setDado(event.target.value)} />
                    <div className={styles.botao}>
                        <button onClick={() => handleClick()}>
                            Procurar CEP
                            <BsSearch className={styles.lupa} />
                        </button>
                    </div>
                </div>
            </div>

            {Object.keys(cep).length > 0 && <Results cep={cep} />}
        </>
    )
}

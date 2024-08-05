import { useState } from 'react'
import './index.scss'
import { Value } from 'sass'
import { Link } from 'react-router-dom'

export default function Ex2() {

    const [gramas, setGramas] = useState(0)

    const [total, setTotal] = useState(0)

    function Pedido2() {


        let resultado = gramas / 1000

        setTotal(resultado)

    }

    return (
        <main>
            <header>
                <div className="Logo">
                    <img className="frei" src="/frei.png" alt="frei" />
                    <h2>React FreiS</h2>
                </div>
                <div className="Sobre">
                    <Link to='/inicial'>Inicial</Link>
                    <Link to='/sobre'>Sobre</Link>
                </div>

            </header>


            <div className="main">
                <div className="volte">
                    <a href="">◄</a>
                    <h1>Exercício 01 - Cupom de desconto</h1>

                </div>
                <div className="hr"><hr /></div>

                <div className="txt">
                    <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
                </div>

                <div className="caixa">
                    <div className="login">
                        <p>informe o em gramas</p>
                        <input type="number" placeholder='0' id="caixa" onChange={e => setGramas(e.target.value)} />

                   
                        <button onClick={Pedido2} >Executar</button>
                    </div>

                    <div className='Resultado'>
                        <h2>O resultado é {total} KG </h2>
                    </div>
                </div>
            </div>

        </main>
    )
}
import { useState } from 'react'
import './index.scss'
import { Value } from 'sass'
import { Link } from 'react-router-dom'

export default function Ex3() {

    const [peq, setPeq] = useState(0)
    const [medio, setMedio] = useState(0)
    const [giga, setGiga] = useState(0)
    const [total, setTotal] = useState(0)

    function Pedido2() {
        let n1 = peq * 13.50
        let n2 = medio * 15.00
        let n3 = giga * 17.50

        let resultado = n1 + n2 + n3

        setTotal (resultado)
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
                    <h1>Exercício 03 - Valor total por quantidade</h1>

                </div>
                <div className="hr"><hr className='hr1
                ' /></div>

                <div className="txt">
                    <p>Implementar um programa em Javascript para calcular o total de uma venda de agai a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do agai & RS 13,50; RS 15,00 e RS 17,50 respectivamente.</p>
                </div>

                <div className="caixa1">
                    <div className="login2" id='caixa3'>
                        <div className='login1'>
                            <div className='seja'>
                                <p>Quantidade pequeno</p>
                                <input type="number" placeholder='0' id="caixa" onChange={e => setPeq(e.target.value)} />
                            </div>
                            <div>
                                <p>Quantidade medio</p>
                                <input type="number" placeholder='0' id="caixa" onChange={e => setMedio(e.target.value)} />
                            </div>
                            <div>
                                <p>Quantidade grande</p>
                                <input type="number" placeholder='0' id="caixa" onChange={e => setGiga(e.target.value)} />
                            </div>
                            <button onClick={Pedido2} >Executar</button>
                        </div>
                       
                    </div>




                </div>

                <div className='Resultado1'>
                    <h2>O resultado é R${total} </h2>
                </div>
            </div>

        </main>
    )
}
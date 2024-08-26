import { useState } from 'react'
import './index.scss'
import { Value } from 'sass'
import { Link } from 'react-router-dom'
import Linha from '../../components/linha'


export default function Ex1() {

    const [pedido, setPedido] = useState(0)
    const [cupom, setCupom] = useState(0)
    const [total, setTotal] = useState(0)

    function Pedido2() {


        let resultado = pedido - cupom

        setTotal(resultado)

    }

    let linhas = [
        {
            'cor_linha': 'laranja', 
            'numEX':'1',
            'titulo':' exercício do cupom'
         }

         
]   

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


                {linhas.map((item, index) => (

                    <div className="row1">
                        <Linha
                            key={index}
                          
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_linha={item.cor_linha}

                        />
                    </div>



                ))}

                <div className="txt">
                    <p> Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terd de desconto. Lor</p>
                </div>

                <div className="caixa">
                    <div className="login">
                        <p>informe o valor</p>
                        <input type="number" placeholder='0' id="caixa" onChange={e => setPedido(e.target.value)} />

                        <p>infome o valor do cupom</p>
                        <input type="number" placeholder='0' id="caixa2" onChange={e => setCupom(e.target.value)} />

                        <button onClick={Pedido2} >Executar</button>
                    </div>

                    <div className='Resultado'>
                        <h2>O resultado é {total} </h2>
                    </div>
                </div>
            </div>

        </main>
    )
}
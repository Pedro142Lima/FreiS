import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Ex4() {

    const  [tabuada, setTabuada] = useState(0)
    const [array, setArray] = useState([])


    function calcTabuada ( ) {

        let tabu = []

        for (let i = 1; i <=10; i++ ) {
            tabu.push(`${tabuada} x ${i} = ${tabuada * i}` );
        }

        setArray(tabu)
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
                    <h1>Exercício 04 - Tabuada</h1>

                </div>
                <div className="hr"><hr className='hr2' /></div>

                <div className="txt">
                    <p>Tabuada </p>
                </div>

                <div className="caixa1">
                    <div className="login2" id='caixa3'>
                        <div className='login1'>
                            <div className='seja'>
                                <p>Digite a tabuada</p>
                                <input type="number" placeholder='0' id="caixa" onChange={e => setTabuada(e.target.value)} />
                            </div>
                            
                            <button onClick={calcTabuada} >Executar</button>
                        </div>
                       
                    </div>




                </div>

                <div className='Resultado1'>
               
                        {array.map((resultado, index) => (
                            <h3 key={index} className='resultado'>
                                {resultado}
                            </h3>
                        ))}
               
                

                </div>
            </div>

        </main>
    )



}

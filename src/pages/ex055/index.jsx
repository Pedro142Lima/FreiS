import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

export default function Ex5() {

    const  [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [res, setRes] = useState(0)
    const [total, setTotal] = useState([])

    function calc () {
        let peso1   = peso 
        let altura1 = altura
        let calculo = (peso1/altura1**2)*10000
        
        setRes (calculo.toFixed(2))
        setTotal()
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
                    <h1>Exercício 05 - IMC</h1>

                </div>
                <div className="hr"><hr className='hr2' /></div>

                <div className="txt">
                    <p> </p>
                </div>

                <div className="caixa1">
                    <div className="login2" id='caixa3'>
                        <div className='login1'>
                            <div className='seja'>
                                <p>IMC</p>
                                <input type="number" placeholder='peso' id="caixa" onChange={e => setPeso(e.target.value)} />
                                <input type="number" placeholder='altura' id="caixa" onChange={e => setAltura(e.target.value)} />
                                
                                <button onClick={calc}>Executar</button>


                                <div className="tudos">
                                    <p>{total}</p>
                                    <button>apagar</button>
                                </div>
                            </div>
                            
                  
                        </div>
                       
                    </div>




                </div>

                <div className='Resultado1'>
                    {res}
                </div>
            </div>

        </main>
    )



}

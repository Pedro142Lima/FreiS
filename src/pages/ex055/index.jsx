import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/header'

export default function Ex5() {

    const  [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [res, setRes] = useState(0)
    const [total, setTotal] = useState([])

    function calc () {
        let peso1   = peso 
        let altura1 = altura
        let calculo = (peso1/altura1**2)*10000
        
        if (calculo <18.5){
            setTotal('abaixo do peso')
        }

        else if (calculo >= 18.5 && calculo < 24.9){
            setTotal('normal')
        }

        
        else if (calculo >= 25.0 && calculo <= 29.9){
            setTotal('sobre-peso')
        }

     
        else if (calculo >= 30){
            setTotal('obeso')
        }


        setRes (calculo.toFixed(2))
        setTotal ([...total, calculo])
       
    }

    const limpar = () => {
        setRes ('')
        setTotal ('')
    }

 
    return (
        <main>
           
           <Header/>


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
                                    <button onClick={limpar}>apagar</button>
                                </div>
                            </div>
                            
                  
                        </div>
                       
                    </div>




                </div>

                <div className='Resultado1'>
               
                    <ul>
                        {total.map (item =>
                            <li>{item}</li>
                        )

                        }
                    </ul>
           
                </div>
            </div>

        </main>
    )



}

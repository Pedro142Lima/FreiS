import "./index.scss"
import { Link } from "react-router-dom"

export default function Inicial () {
    return (
        <div>
            <header>
                <div className="Logo">
                <img className="frei" src="/frei.png" alt="frei" />
                <h2>React FreiS</h2>
                </div>
                <div className="Sobre">
                    <a href="">Inicial</a>
                    <Link to = '/sobre'>Sobre</Link>
                </div>

            </header>

            <div className="cards">
                <h1>Escolha seu treino...</h1>

                <div className="cardz">


                    <div className="card">
                         <div className="bola"></div>

                         <h6>Cupom de desconto</h6>
                         <Link to= '/ex1'>Exercicio 01</Link>
                    </div>
                    
                    <div className="card">
                         <div className="bola2"></div>

                         <h6>Converter Kg/gramas</h6>
                         <Link to= '/ex2'>Exercicio 02</Link>
                    </div>
                    
                    <div className="card">
                         <div className="bola3"></div>

                         <h6>Valor total por quantidade</h6>
                         <Link to= '/ex3'>Exercicio 03</Link>
                    </div>

                    <div className="card">
                         <div className="bola4"></div>

                         <h6>Tabuada</h6>
                         <Link to= '/ex4'>Exercicio 04</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
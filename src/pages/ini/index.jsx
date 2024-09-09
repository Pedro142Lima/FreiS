import Card from "../../components/cards"
import "./index.scss"
import { Link } from "react-router-dom"
import Header from "../../components/header"

export default function Inicial () {

    let cardData = [

         {
            'link_card': '/ex1',
            'titulo': 'Calculadora',
            'numEX': '01',
            'cor_card': 'laranja'
            
        },

        {
            'link_card': '/ex2',
            'titulo': 'gramas',
            'numEX': '02',
            'cor_card': 'azul'
        },

        {
            'link_card': '/ex3',
            'titulo': 'açai',
            'numEX': '03',
            'cor_card': 'verde'
        },

        {
            'link_card': '/ex4',
            'titulo': 'tabuada',
            'numEX': '04',
            'cor_card': 'roxo'
        },

        {
            'link_card': '/ex6',
            'titulo': 'IMC',
            'numEX': '05',
            'cor_card': 'marrom'
        },

    
       ]

    return (
        <div>
           <Header/>

            <div className="cards">
                <h1>Escolha seu treino...</h1>

                <div className="cardz">

                {cardData.map((item, index) => (

                    <div className="row">
                        <Card 
                 
                 key={index}
                            link_card={item.link_card}
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_card={item.cor_card}
                            
                        />
                </div>

      
                 
                ))}

                   
                    </div> 
                 

                
            </div>
        </div>
    )
}
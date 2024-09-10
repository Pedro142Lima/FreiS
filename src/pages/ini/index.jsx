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
            'titulo': 'Converter KG em GRAMAS',
            'numEX': '02',
            'cor_card': 'azul'
        },

        {
            'link_card': '/ex3',
            'titulo': 'Valor total por quantidade',
            'numEX': '03',
            'cor_card': 'verde'
        },
        {
            'link_card': '/ex7',
            'titulo': 'Tempo para ler livro',
            'numEX': '4',
            'cor_card': 'ciano'
        },

        {
            'link_card': '/ex8',
            'titulo': 'Média de notas',
            'numEX': '5',
            'cor_card': 'rosa'
        },


        {
            'link_card': '/ex6',
            'titulo': 'IMC',
            'numEX': '10',
            'cor_card': 'marrom'
        },

        {
            'link_card': '/ex4',
            'titulo': 'tabuada',
            'numEX': '11',
            'cor_card': 'roxo'
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
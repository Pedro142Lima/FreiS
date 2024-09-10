import { useState } from "react";
import Header from "../../components/header";
import Linha from "../../components/linha";
import './index.scss'

export default function Ex7() {

    const [livros, setLivros] = useState('')
    const [paginas, setPaginas] = useState('')
    const [tempo, setTempo] = useState('')
    const [total, setTotal] = useState('')


    const tempoLeitura = () => {
        let total2 = paginas * tempo;
        let s1 = (total2 / 3600)

        setTotal(`Você lerá ${livros} em ${s1} horas.`)

    }


    let linhas = [
        {
            'cor_linha': 'laranja',
            'numEX': '4',
            'titulo': ' exercício do livro'
        }
    ]


    return (
        <div className="mae">
            <Header />

            <div className="parte-superios">
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

                <div className="info">
                    <p>
                    Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página
                    </p>
                </div>

            </div>

            <div className="logica">
                <p>nome do livro</p>

                <input type="text" value={livros} onChange={e => setLivros(e.target.value)} />

                <p>paginas</p>

                <input type="text" value={paginas} onChange={e => setPaginas(e.target.value)} />

                <p>tempo em segundos</p>

                <input type="text" value={tempo} onChange={e => setTempo(e.target.value)} />


                <button onClick={tempoLeitura}>calcular</button>

                <p>{total}</p>


            </div>



        </div>

    );
}
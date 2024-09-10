import { useState } from "react";
import Header from "../../components/header";
import Linha from "../../components/linha";
import './index.scss'

export default function Nota() {
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [resultado, setResultado] = useState('');

    const Total = () => {
  
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);


        let total = (n1 + n2 + n3) / 3;

     
        let passou = '';
        if (total >= 5) {
            passou = 'sim';
        } else {
            passou = 'não';
        }

        setResultado(`A média do aluno foi de ${total.toFixed(2)}. O aluno passou: ${passou}`);
    };

    let linhas = [
        {
            'cor_linha': 'laranja',
            'numEX': '5',
            'titulo': 'Exercício da média'
        }
    ];

    return (
        <div className="mae-2">
            <Header />

          

            <div className="header">

                {linhas.map((item, index) => (
                    <div className="row1" key={index}>
                        <Linha
                            titulo={item.titulo}
                            numEX={item.numEX}
                            cor_linha={item.cor_linha}
                        />
                    </div>
                ))}
            </div>

            <div className="alinhar">

            <div className="info2">
                    <p>
                    Implementar um programa em Javascript que calcule a média de um aluno 
                    </p>
            </div>
            
            <div className="logica">
                <p>Nota 1</p>
                <input type="text" value={nota1} onChange={e => setNota1(e.target.value)} />

                <p>Nota 2</p>
                <input type="text" value={nota2} onChange={e => setNota2(e.target.value)} />

                <p>Nota 3</p>
                <input type="text" value={nota3} onChange={e => setNota3(e.target.value)} />

                <button onClick={Total}>Calcular</button>

                <p>{resultado}</p>
            </div>

            </div>
        </div>
    );
}
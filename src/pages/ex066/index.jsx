import { useState } from "react";

export default function Ex6() {
    const [idade, setIdade] = useState('');
    const [nova, setNova] = useState([]);
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [input, setInput] = useState('');

   
    function Buscar(){
        let msg = {
            name: nome,
            idade: idade,
            genero: genero
        }

        setNova([...nova, msg])
    }


    const Limpar = (index) => {
        const novas = nova.filter((_, i) => i !== index)
        setNova (novas)
    }
    return ( 
        <div className="mae">
            <div className="select">
                <input
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    type="number"
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                />
                <input
                    type="radio"
                    name="genero"
                    value="feminino"
                    checked={genero === 'feminino'}
                    onChange={() => setGenero('feminino')}
                />
                Feminino
                <input
                    type="radio"
                    name="genero"
                    value="masculino"
                    checked={genero === 'masculino'}
                    onChange={() => setGenero('masculino')}
                />
                Masculino

                <button onClick={Buscar}>Buscar</button>
            </div>


            <div className="resp">
                {nova.map((item,index) => 
                    <div className="tudo" key={index}>
                        <h2>{item.name}</h2>
                        <h2>{item.idade }</h2>
                        <h2>{item.genero}</h2>

                        <button onClick={() => Limpar(index)}>dada</button>
                    </div>
                
                )}
            </div>
        </div>
    );
}

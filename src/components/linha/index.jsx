import { Link } from 'react-router-dom'
import './index.scss'

export default function Linha({cor_linha, numEX, titulo}) {
    return(
    <div className="mae">
        <div className="volte">
        <Link to='/inicial'>◄</Link>
        <h1>{`Exercicio ${numEX} - ${titulo}`}</h1>
        
        </div>
        <div className='hr'><hr  className={`hr ${cor_linha}`}/></div>
    </div>
    )
}


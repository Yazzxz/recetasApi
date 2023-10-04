import './Pills.css'

function Pills({filtros, borrado}){
    return(
        <ul className="Pills">
            {filtros.map(elem => (
                <><li className='Pill'>{elem} <button onClick={() => borrado(elem)}>x</button> </li></>
            ))}
        </ul>
    );
}

export default Pills
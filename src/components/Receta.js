import './Receta.css'

function Receta({imagen, titulo, ingredientes}){
    const lista = ingredientes.map(elem => (
        <li>{elem}</li>
    ))
    return(
        <div>
            <img src={imagen}/>
            <h1>{titulo}</h1>
            <div>
            <h2>Ingredientes: </h2>
            <ul>{lista}</ul>
            </div>
        </div>
    );
}

export default Receta;
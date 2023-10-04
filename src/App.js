import Form from "./components/Form";
import Pills from "./components/Pills";
import Receta from "./components/Receta";
import './App.css'
import { useState } from "react";
const consulta = require('./consulta')

export default function App(){
    const [filtros, setFiltros] = useState([])
    const [recetas, setRecetas] = useState()
    const [receta, setReceta] = useState(0)
    
    function agregarLista(elem){
        if(elem !== '' && filtros.indexOf(elem) === -1) setFiltros([...filtros, elem])
    }
    function eleminar(elem){
        setFiltros(filtros.filter(a => a !== elem))
    }
    async function consultar() {
        const data = await consulta(filtros);
        console.log(data);
        setReceta(0);
        setRecetas(data);
    }

    function reiniciar(){
        setReceta(0)
        setRecetas()
        setFiltros([])
    }

    let content;
    if(recetas !== undefined){
        content = (
            <>
                <div className="Botones">
                    {receta > 0 ? (<button onClick={() => setReceta(receta - 1)}>Anterior</button>) : <button disabled>Anterior</button>}
                    <h2>Resultados: {receta + 1}/{recetas.length}</h2>
                    {receta < recetas.length - 1 ? <button onClick={() => setReceta(receta + 1)}>Siguiente</button> : <button disabled>Siguiente</button>}
                </div>
                <Receta titulo={recetas[receta].recipe.label} imagen={recetas[receta].recipe.image} ingredientes={recetas[receta].recipe.ingredientLines}/>
            </>
            
        );
    } else{
        content = <h1>Busca una comida...</h1>
    }
    return(
        <>
            <div className="App">
                <h1>¿Que vas a comer hoy?</h1>
                <Form agregadoLista={agregarLista} />
                <Pills filtros={filtros} borrado={eleminar}/>
                <div>
                {filtros.length >= 1 ? (<button onClick={consultar}>Buscar Receta</button>) : <p>Llena los campos</p>}
                {filtros.length >= 1 || recetas !== undefined ? <button onClick={reiniciar}>Reiniciar</button> : <></>}
                </div>
                {content}
            </div>
        </>
    );
}
import './Form.css'

function Form({agregadoLista}){    
    return(
        <form className="Form">
            <h2>Llena los campos y busca algo ideal para comer</h2>
            <label>Region: </label>
            <select onChange={e => agregadoLista(e.target.value)}>
                <option value=''>Cualquiera</option>
                <option value='american'>Comida Americana</option>
                <option value='asian'>Asiatica</option>
                <option value='caribbean'>Del caribe</option>
                <option value='mexican'>Mexicana</option>
                <option value='italian'>Italiana</option>
                <option value='chinese'>China</option>
                <option value='south american'>America del sur</option>
            </select>
            <br />
            <label>Tipo de comida: </label>
            <select onChange={e => agregadoLista(e.target.value)} >
                <option value=''>Cualquiera</option>
                <option value='breakfast'>Desayuno</option>
                <option value='lunch'>Almuerzo</option>
                <option value='tea'>Merienda</option>
                <option value='dinner'>Cena</option>
            </select>
        </form>
    )
}

export default Form;
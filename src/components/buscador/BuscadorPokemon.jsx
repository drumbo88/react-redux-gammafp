import { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorActions";

const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState("mewtwo");
    return (
        <div className="form-group">
            <label htmlFor="" className="text-white"></label>
            <input
                type="text"
                className="form-control"
                id="buscar_pokemon"
                value={pokemon}
                onChange={e => { setPokemon(e.target.value) }}
            />
            <button className="btn btn-primary mt-3" onClick={() => dispatch(fetchPokemon(pokemon))}>Enviar</button>
        </div>
    );
};

export default BuscadorPokemon;

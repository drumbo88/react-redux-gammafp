import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook = function () {
    const games = useSelector(state => state.games)
    return <React.Fragment>
        Unidades: { games.pokemon }
    </React.Fragment>
}

export default CantidadPokemonHook

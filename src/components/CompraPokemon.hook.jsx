import React from "react";
import { useDispatch } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopActions'

const CompraPokemonHook = function () {

    const dispatch = useDispatch()
    return <div>
        <button onClick={()=>{dispatch(buy_pokemon_action(1))}} className="btn btn-dark btn-sm mb-2">
            Comprar Pokemon
        </button>
        <button onClick={()=>{dispatch(return_pokemon_action(1))}} className="btn btn-dark btn-sm mb-2">
            Retornar Pokemon
        </button>
    </div>
}

export default CompraPokemonHook

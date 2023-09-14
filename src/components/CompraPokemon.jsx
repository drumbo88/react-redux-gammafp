import React, { Component } from "react";
import { connect } from "react-redux";
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopActions'

class CompraPokemon extends Component {
    render() {
        return <div>
            <button onClick={()=>{this.props.buy_pokemon_action(1)}} className="btn btn-dark btn-sm mb-2">
                Comprar Pokemon
            </button>
            <button onClick={()=>{this.props.return_pokemon_action(1)}} className="btn btn-dark btn-sm mb-2">
                Retornar Pokemon
            </button>
        </div>
    }
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

export default connect(null, mapDispatchToProps)(CompraPokemon)
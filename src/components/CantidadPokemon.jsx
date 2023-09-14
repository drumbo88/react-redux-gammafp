import React, { Component } from "react";
import { connect } from "react-redux";

class CantidadPokemon extends Component {
    render() {
        return <React.Fragment>
            Unidades: { this.props.games.pokemon }
        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(CantidadPokemon)
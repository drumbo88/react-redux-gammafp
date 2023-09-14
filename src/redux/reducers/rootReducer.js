import { combineReducers } from "redux";
import games_reducer from "./gameShopReducer";
import buscador from "./buscadorReducer";

const rootReducers = combineReducers({
    games: games_reducer,
    buscador,
});

export default rootReducers;

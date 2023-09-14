import { combineReducers } from "redux";
import games_reducer from "./gameShopReducers";

const rootReducers = combineReducers({ games: games_reducer })

export default rootReducers
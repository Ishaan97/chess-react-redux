import { combineReducers } from "redux";

import { gameStateReducer } from "./game-state/game-state.reducer";

const rootReducer = combineReducers({
    gameState : gameStateReducer
});
export default rootReducer;
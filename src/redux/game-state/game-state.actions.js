import { GameStateActionTypes } from "./game-state.types";

export const newResetGame = () => ({
    type : GameStateActionTypes.NEW_RESET_GAME
});

export const userClicksOnSquare = ({row, col})=>({
    type : GameStateActionTypes.SQUARE_CLICKED,
    payload : {row, col}
});
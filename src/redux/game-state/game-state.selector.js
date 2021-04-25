import { createSelector } from "reselect";

const selectGameState = state => {
    return state.gameState
}

export const selectBoardState = createSelector(
    [selectGameState],
    gameState => gameState.boardState
);
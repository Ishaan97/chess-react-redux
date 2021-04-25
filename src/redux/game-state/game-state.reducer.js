import { GameStateActionTypes } from "./game-state.types";

import { handleSquareClick } from "./game-state-utility/game-state.utility";
const INITIAL_STATE = {
    boardState :  [
        ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
        ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
        ["--", "--", "--", "--", "--", "--", "--", "--"],
        ["--", "--", "--", "--", "--", "--", "--", "--"],
        ["--", "--", "--", "--", "--", "--", "--", "--"],
        ["--", "--", "--", "--", "--", "--", "--", "--"],
        ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
        ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]
    ],
    whiteToMove : true,
    moveLog : [],
    inCheck : false,
    pins : [],
    checks : [],
    squareSelected : null,
    playerClicks : []
}

export const gameStateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GameStateActionTypes.NEW_RESET_GAME : 
            return { ...INITIAL_STATE };
        case GameStateActionTypes.SQUARE_CLICKED : 
            return{
                ...state,
                ...handleSquareClick(action.payload, state)
            }    
        // let {boardState, playerClicks, squareSelected, whiteToMove}= handleSquareClick(action.payload, state)
            // return {
            //     ...state,
            //     boardState : boardState,
            //     playerClicks : playerClicks,
            //     squareSelected : squareSelected,
            //     whiteToMove : whiteToMove
            // }
        default : 
            return { ...state };
    }
}
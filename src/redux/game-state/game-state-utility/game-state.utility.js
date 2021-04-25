export function handleSquareClick({row, col}, state) {
    let squareSelected = state.squareSelected;
    let playerClicks = state.playerClicks;
    let boardState = state.boardState;
    let whiteToMove = state.whiteToMove;

    if (squareSelected!== null && row === squareSelected.row && col === squareSelected.col){
        // * Deselect the choice
        squareSelected = null;
        playerClicks = [];
    }
    else{
        squareSelected = {row, col};
        playerClicks.push(squareSelected);
    }
    
    if(playerClicks.length === 2){
        boardState = move(playerClicks, boardState);
        squareSelected = null;
        playerClicks = [];
        whiteToMove = !state.whiteToMove
    }
    return {
        boardState,
        playerClicks,
        squareSelected,
        whiteToMove 
    }
}

function move(playerClicks, boardState){
    let startPosition = playerClicks[0];
    let endPosition = playerClicks[1];
    
    let pieceMoved = boardState[startPosition.row][startPosition.col]
    
    boardState[startPosition.row][startPosition.col] = "--";
    boardState[endPosition.row][endPosition.col] = pieceMoved;

    return boardState
}
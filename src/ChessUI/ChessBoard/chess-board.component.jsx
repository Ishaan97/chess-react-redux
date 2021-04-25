import React from 'react';
// Redux related Imports
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectBoardState } from "../../redux/game-state/game-state.selector";
// Importing Components
import ChessSquare from "./ChessSquare/chess-square.component";
// Importing styles
import './chess-board.style.css';

class ChessBoard extends React.Component{
    render(){
        let {boardState} = this.props;
        const board = this.getBoard(boardState);
        console.log(board);

        return(
            <>
                <div className="board">
                    {this.getBoard(boardState)}
                </div>
                
            </>
        );
    }

    getBoard(boardState){
        const squares = this.getSquares(boardState);
        const board = [];
        const colors = ["light", "dark"];
        for(let row = 0; row < 8; row++){
            const squareRows = [];
            for(let col = 0; col < 8; col++){
                let color = colors[((row+col)%2)]
                let key = (row*8)+col
                let position = {row, col};
                squareRows.push(this.renderSquare(squares[key], color, position, key))
            }
            board.push(<div className="board-row" key={row}>{squareRows}</div>)
        }
        return board
    }

    renderSquare(square, color, position, key){
        return  <ChessSquare 
            color={color} 
            square={square} 
            position={position}
            key={key} />
    }

    getSquares(boardState){
        const squares = Array(64).fill(null);
        for(let row=0;row<8;row++){
            for(let col=0;col<8;col++){
                if( boardState[row][col] !== "--"){
                    squares[(row*8)+col] = {piece : boardState[row][col]}
                }else{
                    squares[(row*8)+col] = {piece : null}
                }
            }
        }
        return squares;
      }
}


const mapStateToProps = createStructuredSelector({
    boardState : selectBoardState
})

export default connect(mapStateToProps)(ChessBoard);
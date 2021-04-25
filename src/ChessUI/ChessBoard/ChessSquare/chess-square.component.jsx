import React from 'react';

// Import Redux
import { connect } from "react-redux";
// Import actions
import { userClicksOnSquare } from "../../../redux/game-state/game-state.actions";

// Import Images
import bP from '../../../assets/img/bP.png'
import wP from '../../../assets/img/wP.png'
import bK from '../../../assets/img/bK.png' 
import wK from '../../../assets/img/wK.png'
import bQ from '../../../assets/img/bQ.png'
import wQ from '../../../assets/img/wQ.png' 
import bN from '../../../assets/img/bN.png'
import wN from '../../../assets/img/wN.png'
import bR from '../../../assets/img/bR.png' 
import wR from '../../../assets/img/wR.png'
import bB from '../../../assets/img/bB.png'
import wB from '../../../assets/img/wB.png' 

// Import Styles
import './chess-square.style.css';




class ChessSquare extends React.Component{
    render(){
        
        const {color, square, position, userClicksOnSquare} = this.props;
        const {piece} = square
        let pieceToDisplay = this.choosePiece(piece);
        return(
            <>
                <div className={`square ${color}`}
                onClick={()=> userClicksOnSquare(position)}>
                    {pieceToDisplay !== null ? 
                        <img src={pieceToDisplay} alt="" /> : null }
                </div>
            </>
        );
    }

    choosePiece(piece){
        if(piece === null){
            return piece;
        }

        if(piece === "wP"){
            return wP
        }
        if(piece === "bP"){
            return bP
        }
        if(piece === "bK"){
            return bK
        }
        if(piece === "wK"){
            return wK
        }
        if(piece === "bQ"){
            return bQ
        }
        if(piece === "wQ"){
            return wQ
        }
        if(piece === "bB"){
            return bB
        }
        if(piece === "wB"){
            return wB
        }
        if(piece === "bR"){
            return bR
        }
        if(piece === "wR"){
            return wR
        }
        if(piece === "bN"){
            return bN
        }
        if(piece === "wN"){
            return wN
        }
        
    }
}

const mapDispatchToProps = dispatch => ({
    userClicksOnSquare : position => dispatch(userClicksOnSquare(position))
})

export default connect(null, mapDispatchToProps)(ChessSquare);
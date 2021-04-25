import React from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { newResetGame } from "../redux/game-state/game-state.actions";

// Importing styles
import './main-menu.style.css';

class MainMenu extends React.Component { 
    render(){
        let {newGame} = this.props;
        return(
            <>
                <Link to="/game" onClick={()=> newGame()}>New Game</Link>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    newGame : () => dispatch(newResetGame())
})

export default connect(null, mapDispatchToProps)(MainMenu);
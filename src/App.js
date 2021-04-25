import ChessBoard from "./ChessUI/ChessBoard/chess-board.component";
import MainMenu from "./MainMenu/main-menu.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Switch>
          
            <Route exact path="/" component={ MainMenu } />
            <Route path="/game" component={ ChessBoard } />
          
        </Switch>
        </div>
      </Router>
      
      
        
    </div>

  );
}

export default App;

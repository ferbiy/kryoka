import React from 'react';
import './App.css';
import Main from "./pages/Main1";
import Contact from './pages/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {


  return (
      <Router>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      </Router>
  );
}


export default App;

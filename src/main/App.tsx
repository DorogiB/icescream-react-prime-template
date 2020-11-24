import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

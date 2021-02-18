import './App.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import { history } from './helpers/history';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import First from './pages/first'
import Second from './pages/second'
import Third from './pages/third'
import Fourth from './pages/fourth'
import Home from './pages/home'

function App() {
  return (
    <Router history={history}>
    <div className="App">
    
    <Navbar bg="primary" variant="dark">
    <Link to={"/"} className="navbar-brand">Home</Link>
    <Nav className="mr-auto">
      <Link className="nav-link" to={"/first"}>First Week</Link>
      <Link className="nav-link" to={"/second"}>Second Week</Link>
      <Link className="nav-link" to={"/third"}>Third Week</Link>
      <Link className="nav-link" to={"/fourth"}>Fourth Week</Link>
    </Nav>
  </Navbar>
    <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]}><Home/></Route>
              <Route exact path="/first"><First/></Route>
              <Route exact path="/second"><Second/></Route>
              <Route exact path="/third"><Third/></Route>
              <Route exact path="/fourth"><Fourth/></Route>
              <Route><Home/></Route>
            </Switch>
          </div>
          </div>
    </Router>
  );
}

export default App;

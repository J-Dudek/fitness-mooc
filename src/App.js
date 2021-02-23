import './App.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import { history } from './helpers/history';
// Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from './pages/home'
import Common from './pages/common'
import Footer from './components/footer/footer'
// Data
import foot from './data/foot';
import FirstWeek from './data/week1';
import SecondWeek from './data/week2';
import ThirdWeek from './data/week3';
import FourthWeek from './data/week4'



function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar bg="primary" sticky="top" variant="dark">
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
            <Route exact path={["/", "/home"]}><Home /></Route>
            <Route exact path="/first"><Common data={FirstWeek} /></Route>
            <Route exact path="/second"><Common data={SecondWeek} /></Route>
            <Route exact path="/third"><Common data={ThirdWeek} /></Route>
            <Route exact path="/fourth"><Common data={FourthWeek} /></Route>
            <Route><Home /></Route>
          </Switch>
        </div>
        <Footer foot={foot} />
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { Router, Switch, Route } from "react-router-dom";
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
        <Navbar collapseOnSelect expand="lg" bg="primary" sticky="top" variant="dark">
          <Navbar.Brand href={"/"}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={"/first"}>First Week</Nav.Link>
              <Nav.Link href={"/second"}>Second Week</Nav.Link>
              <Nav.Link href={"/third"}>Third Week</Nav.Link>
              <Nav.Link href={"/fourth"}>Fourth Week</Nav.Link>
            </Nav>
          </Navbar.Collapse>
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

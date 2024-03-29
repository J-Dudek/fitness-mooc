import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import { history } from './helpers/history';
// Components
import Home from './components/dataContainer/pages/home'
import Common from './components/dataContainer/pages/common'
import Footer from './components/body/footer/footer'
// Data
import foot from './data/foot';
import team from './data/team'
import FirstWeek from './data/week1';
import SecondWeek from './data/week2';
import ThirdWeek from './data/week3';
import FourthWeek from './data/week4'
import CustomNav from "./components/body/navigation/Nav";



function App() {
  return (
    <Router history={history}>
      <div className="App">
        <CustomNav />
        <div className="router">
          <Switch>
            <Route exact path={["/", "/home"]}><Home /></Route>
            <Route exact path="/first"><Common data={FirstWeek} /></Route>
            <Route exact path="/second"><Common data={SecondWeek} /></Route>
            <Route exact path="/third"><Common data={ThirdWeek} /></Route>
            <Route exact path="/fourth"><Common data={FourthWeek} /></Route>
            <Route><Home /></Route>
          </Switch>
        </div>
        <Footer foot={foot} team={team} />
      </div>
    </Router>
  );
}

export default App;

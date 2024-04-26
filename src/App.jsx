import Launch from "./pages/Launch";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Team from "./pages/Team";
import Research from "./pages/Research";
import Explore from "./pages/Explore";
AOS.init();
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Global/Navbar";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Launch} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/research' component={Research} />
          <Route exact path='/explore' component={Explore} />
        </Switch>
      </Router>
    </>
  )
}

export default App
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ROUTE from './Route'
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

AOS.init();

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTE.HOME} component={Home}/>
          <Route exact path={ROUTE.REGISTER} component={Register}/>
          <Route exact path={ROUTE.LOGIN} component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

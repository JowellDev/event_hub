import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ROUTE from './Route'
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import UserRegisterPage from './pages/Auth/Register/UserRegiter';
import ManagerRegisterPage from './pages/Auth/Register/ManagerRegister';
import UserLoginPage from './pages/Auth/Login/UserLogin';
import ManagerLoginPage from './pages/Auth/Login/ManagerLogin';
AOS.init();

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTE.HOME} component={Home}/>
          <Route exact path={ROUTE.REGISTER} component={Register}/>
          <Route exact path={ROUTE.LOGIN} component={Login}/>
          <Route exact path={ROUTE.PUBLIC_REGISTER} component={UserRegisterPage}/>
          <Route exact path={ROUTE.ORGANISER_REGISTER} component={ManagerRegisterPage}/>
          <Route exact path={ROUTE.PUBLIC_LOGIN} component={UserLoginPage}/>
          <Route exact path={ROUTE.ORGANISER_LOGIN} component={ManagerLoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

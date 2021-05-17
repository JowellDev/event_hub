import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ROUTE from './Route'
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import UserRegisterPage from './pages/Auth/Register/UserRegister';
import ManagerRegisterPage from './pages/Auth/Register/ManagerRegister';
import UserLoginPage from './pages/Auth/Login/UserLogin';
import ManagerLoginPage from './pages/Auth/Login/ManagerLogin';
import EventsPage from './pages/Evenements';
import setAuthToken from './utils/setAuthToken';

//All my application context
import UserAuthState from './context/Auth/UserAuth/UserAuthState';
import ManagerAuthState from './context/Auth/ManagerAuth/ManagerAuthState';
import AlertState from './context/Alert/AlertState';

AOS.init();


if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <div className="App">
      <ManagerAuthState>
        <UserAuthState>
          <AlertState>
            <Router>
              <Switch>
                <Route exact path={ROUTE.HOME} component={Home}/>
                <Route exact path={ROUTE.REGISTER} component={Register}/>
                <Route exact path={ROUTE.LOGIN} component={Login}/>
                <Route exact path={ROUTE.PUBLIC_REGISTER} component={UserRegisterPage}/>
                <Route exact path={ROUTE.ORGANISER_REGISTER} component={ManagerRegisterPage}/>
                <Route exact path={ROUTE.PUBLIC_LOGIN} component={UserLoginPage}/>
                <Route exact path={ROUTE.ORGANISER_LOGIN} component={ManagerLoginPage}/>
                <Route exact path={ROUTE.EVENTS} component={EventsPage}/>
              </Switch>
            </Router>
          </AlertState>
        </UserAuthState>
      </ManagerAuthState>
      
    </div>
  );
}
export default App;

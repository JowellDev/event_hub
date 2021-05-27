import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useEffect} from 'react';
import ROUTE from './Route'
import Home from './pages/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import UserRegisterPage from './pages/Auth/Register/UserRegister';
import ManagerRegisterPage from './pages/Auth/Register/ManagerRegister';
import UserLoginPage from './pages/Auth/Login/UserLogin';
import ManagerLoginPage from './pages/Auth/Login/ManagerLogin';
import EventsPage from './pages/Evenements';
import UserDashboard from './pages/Dashboard/User';
import ManagerDashboard from './pages/Dashboard/Manager';
import GestionDeCompteManager from './pages/AccountManage/Manager';
import GestionDeCompteUser from './pages/AccountManage/User';
import ManagerEventDetail from './pages/Dashboard/Manager/ManagerEvent';

import UserAuthState from './context/Auth/UserAuth/UserAuthState';
import ManagerAuthState from './context/Auth/ManagerAuth/ManagerAuthState';
import EventState from './context/Evenement/EventState';
import AlertState from './context/Alert/AlertState';


AOS.init();


const App = () => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(token, user)
    
  }, [])



  return (
    <div className="App">
      <EventState>
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
                  <Route exact path={ROUTE.USER_DASH} component={UserDashboard}/>
                  <Route exact path={ROUTE.MANAGER_DASH} component={ManagerDashboard}/>
                  <Route exact path={ROUTE.MANAGER_ACCOUNT_MANAGER} component={GestionDeCompteManager}/>
                  <Route exact path={ROUTE.USER_ACCOUNT_MANAGER} component={GestionDeCompteUser}/>
                  <Route exact path={ROUTE.MANAGER_VIEW_EVENT} component={ManagerEventDetail} />
                  <Redirect to={'/'} />
                </Switch>
              </Router>
            </AlertState>
          </UserAuthState>
        </ManagerAuthState>
      </EventState>
    </div>
  );
}
export default App;

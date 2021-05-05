import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminDashboard from './pages/Admin/Dashboard';
import AllEvent from './pages/Admin/AllEvent';
import AllUser from './pages/Admin/AllUser';
import ManagerDashboard from './pages/Manager/Dashboard';
import ManagerEvent from './pages/Manager/Myevents';
import UserDashboard from './pages/User/Dashboard';
import Favoris from './pages/User/Favoris';
import AllEvents from './pages/AllEvent/All';
import OneEvent from './pages/AllEvent/OneEvent';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/admin/dashboard" component={AdminDashboard}/>
          <Route exact path="/admin/dashboard/events-created" component={AllEvent}/>
          <Route exact path="/admin/dashboard/users-registered" component={AllUser}/>
          <Route exact path="/manager/dashboard" component={ManagerDashboard}/>
          <Route exact path="/manager/dashboard/events" component={ManagerEvent}/>
          <Route exact path="/user/dashboard" component={UserDashboard}/>
          <Route exact path="/user/dashboard/favoris" component={Favoris}/>
          <Route exact path="/events" component={AllEvents}/>
          <Route exact path="/event/:id" component={OneEvent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

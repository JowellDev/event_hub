import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ROUTE from './Route'
import Home from './pages/Home';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTE.HOME} component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

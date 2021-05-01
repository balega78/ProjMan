import './App.css';
import ProjectStat from './pages/mainPage/ProjectStat';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Header from './pages/header/Header';

function App() {
  return (
    <div className="App">
      <Router className="Router" history={history}>
        <Header />
        <Switch>
          <Route path="/projektek">
            <ProjectStat />
          </Route>
          <Route path="/riport">
            {/* <Riport /> */}
          </Route>
          <Route path="/login">
            {/* <Login /> */}
          </Route>
          <Route path="/register">
            {/* <Register /> */}
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

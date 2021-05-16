import React from 'react';
import ProjectStat from './component/ProjectStat';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../history';
import Header from './header/Header';
import StartHeader from './startHeader/StartHeader';
import Login from '../login/Login'
import Registration from '../registration/Registration'
import { connect } from 'react-redux'

function MainPage({user, rights}) {

  return (
    <div className="App">
      <Router className="Router" history={history}>

        {user && <Header user={user}/>}
        {!user && <StartHeader />}

        <Switch>
          <Route path="/projektek">
            <ProjectStat />
          </Route>
          <Route path="/riport">
            {/* <Riport /> */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.login.user,
    rights: state.login.rights,
  };
};

export default connect(mapStateToProps, null)(MainPage);
import React from 'react';
// import logo from './logo.svg';
import {createStore} from 'redux'
import reducer from './reducers/index.js';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {fakeInterests, fakeSkills} from "./dummy-data";
import Login from './Components/login.js';
import Navbar from './Components/navbar.js';
import Home from './Components/home.js';

// initialize the store
const store = createStore(reducer)

// main app component
function App() {
    console.log(store.getState())
    console.log('test return', fakeInterests);
    console.log('test return', fakeSkills);
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login updateUsername={updateUsername}/>
          </Route>
          <Route exact path="/home">
            <Navbar username={store.getState().user.userName}/>
            <Home username={store.getState().user.userName}/>
          </Route>
        </Switch>
    </div>
  );
}

// update username (for login page)
function updateUsername(new_username) {
  store.dispatch({type:"UPDATE_USERNAME",new_username:new_username});
}

export default App;

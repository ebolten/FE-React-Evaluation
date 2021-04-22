import React from 'react';
// import logo from './logo.svg';
import {createStore} from 'redux'
import reducer from './reducers/index.js';
import './App.css';
import {Route,Switch,useHistory} from 'react-router-dom';
import {fakeInterests, fakeSkills} from "./dummy-data";
import Login from './Components/login.js';
import Navbar from './Components/navbar.js';
import Home from './Components/home.js';
import Interests from './Components/interests.js';
import Skills from './Components/skills.js';

// initialize the store
const store = createStore(reducer)

// main app component
function App() {
    const history = useHistory();
    console.log(store.getState())
    console.log('test return', fakeInterests);
    console.log('test return', fakeSkills);
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login updateUsername={updateUsername} history={history}/>
          </Route>
          <Route exact path="/home">
            <Navbar deleteUsername={deleteUsername} store={store} history={history}/>
            <Home store={store}/>
          </Route>
          <Route path="/interests">
            <Navbar deleteUsername={deleteUsername} store={store} history={history}/>
            <Interests store={store}/>
          </Route>
          <Route path="/skills">
            <Navbar deleteUsername={deleteUsername} store={store} history={history}/>
            <Skills store={store}/>
          </Route>
        </Switch>
    </div>
  );
}

// update username (for login page)
function updateUsername(new_username) {
  // make http request to server
  fetch("http://localhost:3000/")
  .then(resp=>resp)
  .then(data=>{
    // update the state with new interests and skills data
    store.dispatch({type:"UPDATE_INTERESTS",new_interests:fakeInterests})
    store.dispatch({type:"UPDATE_SKILLS",new_skills:fakeSkills})
  })
  // update state with new username
  store.dispatch({type:"UPDATE_USERNAME",new_username:new_username});
}

// delete username (for logout)
function deleteUsername() {
  store.dispatch({type:"UPDATE_USERNAME",new_username:""});
}

export default App;

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
import InterestDeatil from './Components/interest_detail.js';
import SkillDeatil from './Components/skill_detail.js';

// initialize the store
const store = createStore(reducer)

// main app component
function App() {
    const history = useHistory();
  return (
    <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login submitLogin={submitLogin} updateUsername={updateUsername} history={history}/>
          </Route>
          <Route exact path="/home">
            <Navbar addHistory={addHistory} deleteUsername={deleteUsername} store={store} history={history}/>
            <Home store={store} history={history}/>
          </Route>
          <Route exact path="/interests">
            <Navbar addHistory={addHistory} deleteUsername={deleteUsername} store={store} history={history}/>
            <Interests store={store} history={history}/>
          </Route>
          <Route exact path="/skills">
            <Navbar addHistory={addHistory} deleteUsername={deleteUsername} store={store} history={history}/>
            <Skills store={store} history={history}/>
          </Route>
          <Route path="/interests/">
            <Navbar addHistory={addHistory} deleteUsername={deleteUsername} store={store} history={history}/>
            <InterestDeatil store={store} history={history}/>
          </Route>
          <Route path="/skills/">
            <Navbar addHistory={addHistory} deleteUsername={deleteUsername} store={store} history={history}/>
            <SkillDeatil store={store} history={history}/>
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

// submit login functionality
function submitLogin(event,history) {
  event.preventDefault();
  // store whether or not username/password is valid
  let validPassword = false;
  let validUsername = false;
  // store username and password field values
  let username = event.target.username.value;
  let password = event.target.password.value;
  // check if username is valid
  if (username.length < 5) {
      alert("Username Must Contain at Least 5 Characters")
  } else {
      validUsername = true;
  }
  // check if password is valid
  if (password.length < 5) {
      alert("Password Must Contain at Least 5 Characters")
  } else {
      validPassword = true;
  }
  // if username and password are valid, redirect to homepage
  if (validPassword && validUsername) {
      updateUsername(username);
      // set timeout so theres time to load interests and skills before redirecting
      setTimeout(function(){history.push("/home");},250);
  }
}

// when navbar link is clicked, add new path to history
function addHistory(history,route) {
  history.push(route)
}

export default App;

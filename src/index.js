import React from "react";
import {render} from "react-dom";
import {Router,Route,browserHistory} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {firebaseApp} from "./firebase";
import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import reducer from "./reducers";
import {logUser} from "./actions";

const store=createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    browserHistory.push("/app");
    const {email}=user;
    store.dispatch(logUser(email));
  }
  else{
    browserHistory.replace("/signin");
  }
});

render( <Provider store={store}>
          <Router path="/" history={browserHistory} >
            <Route component={App} path="/app" />
            <Route component={SignIn} path="/signin" />
            <Route component={SignUp} path="/signup" />
          </Router>
       </Provider>
       ,document.getElementById("root"));

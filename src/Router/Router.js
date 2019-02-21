import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import history from "../History"
import { LoginContainer,   Dashboard } from "../Components/index"
import * as firebase from 'firebase'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBsFwEFsYYlBJ_TVDHu3NXkW1eHEK4QC1M",
    authDomain: "new-todo-project.firebaseapp.com",
    databaseURL: "https://new-todo-project.firebaseio.com",
    projectId: "new-todo-project",
    storageBucket: "new-todo-project.appspot.com",
    messagingSenderId: "463609736874"
};
firebase.initializeApp(config);


class Routers extends Component {
    render() {
        return (
            <div>
                <Router history={history} >
                    <div>
                        <Route exact path="/" component={LoginContainer} />
                        <Route exact path="/Dashboard" component={Dashboard} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routers;
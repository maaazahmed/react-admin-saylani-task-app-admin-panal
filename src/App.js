import React, { Component } from 'react';
import { LoginContainer } from "./Components/index"
import Routers from "./Router/Router"
import { Provider } from "react-redux"
import store from "./store/index"



class App extends Component {
  
  render() {
    return (
      <Provider store={store} >
        <Routers />
      </Provider>
    );
  }
}

export default App;

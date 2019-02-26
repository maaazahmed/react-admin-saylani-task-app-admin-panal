import React, { Component } from 'react';
import { LoginContainer } from "./Components/index"
import Routers from "./Router/Router"
import { Provider } from "react-redux"
import store from "./store/index"
import TEST from "./Components/Dasboard/TextCompoent"


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

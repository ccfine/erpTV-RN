import React, { Component } from "react"
import { View } from "react-native"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { NativeRouter, Switch, Route } from "react-router-native"
import reducer from "./src/redux/reducer.js"
import IsLogin from "./src/container/isLogin/IsLogin.js"
import LoginPage from "./src/container/loginPage/LoginPage.js"

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <NativeRouter>
          <View>
            <IsLogin />
            <Switch>
              <Route path="/" component={ LoginPage } />
            </Switch>
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}
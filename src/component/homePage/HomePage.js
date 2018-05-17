import React, { Component } from "react"
import { Navigator } from "react-native-deprecated-custom-components"
import SalePage from "../../container/salePage/SalePage.js"

export default class HomePage extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{
          component: SalePage 
        }}
        renderScene={ (route, navigator) => 
          <route.component navigator={ navigator } />
        }
      />
    )
  }
}
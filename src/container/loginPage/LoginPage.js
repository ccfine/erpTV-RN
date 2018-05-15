import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

export default class LoginPage extends Component {
  render () {
    return (    
      <ImageBackground source={ require("./bg.png") } style={ styles.backgroundImage } resizeMode="cover">
        <View style={ styles.container }>
          <Text style={ styles.title }>
            <Text style={ styles.xq }>【小强</Text>
            <Text style={ styles.erp }>ERP</Text>
            <Text style={ styles.bracket }>】</Text>
            <Text style={ styles.tv }>TV</Text>
            <Text style={ styles.ban }>版</Text>
          </Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: 960,
    height: 540
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "微软雅黑",
    fontWeight: "bold"
  }, 
  xq: {
    fontSize: 70.5,
    color: "#34c3ff"
  },
  erp: {
    fontSize: 82,
    color: "#34c3ff"
  },
  bracket: {
    fontSize: 70.5,
    color: "#34c3ff"
  },
  tv: {
    fontSize: 82,
    color: "#ffe400"
  },
  ban: {
    fontSize: 70.5,
    color: "#ffe400"
  }
})
import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

export default class SalePage extends Component {
  render () {
    return (
      <ImageBackground source={ require("./bg.png") } resizeMode="cover" style={ styles.bgImage }>
        <View style={ [styles.container, { justifyContent: "flex-start", }] }>
          <ImageBackground source={ require("./title.png") } resizeMode="cover" style={ styles.topBgImage }>
            <View style={ styles.container }>
              <Text style={ styles.title }>
                <Text style={ styles.today }>【今日】</Text>
                销售统计
              </Text>
              <Text style={ styles.company }>走遍全球旅行社</Text>
            </View>
          </ImageBackground>
          <View>
            
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  bgImage: {
    width: 960,
    height: 540
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topBgImage: {
    width: 960,
    height: 70.5
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#34c3ff"
  },
  today: {
    color: "#ffc84d"
  },
  company: {
    fontSize: 15,
    color: "#fff"
  }
})
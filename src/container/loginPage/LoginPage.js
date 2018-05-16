import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground, TextInput } from "react-native"

export default class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      pwd: ""
    }
  }
  handleChangePwd (value) {
    this.setState({
      pwd: value,
    })
  }
  render () {
    return (    
      <ImageBackground source={ require("./bg.png") } resizeMode="cover" style={ styles.bgImage }>
        <View style={ styles.container }>
          <Text style={ styles.title }>
            <Text style={ styles.xq }>【小强</Text>
            <Text style={ styles.erp }>ERP</Text>
            <Text style={ styles.bracket }>】</Text>
            <Text style={ styles.tv }>TV</Text>
            <Text style={ styles.ban }>版</Text>
          </Text>
          <ImageBackground source={ require("./pwd.png") } resizeMode="cover" style={ styles.pwdImage }>
            <View style={ styles.container }>
              <TextInput value={ this.state.pwd } autoFocus={ true } maxLength={ 8 } placeholder="请输入统计序列号" placeholderTextColor="#34c3ff"
                         underlineColorAndroid="transparent" style={ [styles.text, { width: 200 }] } onChangeText={ value => this.handleChangePwd(value) }
              />
            </View>
          </ImageBackground>
          <ImageBackground source={ require("./login.png") } resizeMode="cover" style={ styles.loginImage }>
            <View style={ styles.container }>
              <Text style={ styles.text }>登录</Text>
            </View>
          </ImageBackground>
          <ImageBackground source={ require("./msg.png") } resizeMode="cover" style={ styles.msgImage }>
            <View style={ styles.container }>
              <Text style={ styles.msg }>您输入的系统序列号有误！</Text>
            </View>
          </ImageBackground>
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
  },
  pwdImage: {
    width: 248.5,
    height: 52,
    marginTop: 23, 
  },
  loginImage: {
    width: 148.5,
    height: 52,
    marginTop: 20
  },
  text: {
    fontSize: 22,
    color: "#34c3ff",
  },
  msgImage: {
    width: 127.5,
    height: 22,
    marginTop: 35
  },
  msg: {
    fontSize: 10,
    color: "#34c3ff"
  }
})
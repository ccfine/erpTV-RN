import React, { Component } from "react"
import { connect } from "react-redux"
import { login } from "../../redux/action/login.action.js" 
import { StyleSheet, View, Text, ImageBackground, TextInput, Image } from "react-native"

@connect(
  state => state.login,
  { login }
)

export default class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      pwd: ""
    }
    this.onLogin = this.onLogin.bind(this)
  }
  componentDidUpdate () {
    if (this.props.isLogin) {
      this.timer = setTimeout(() => {
        this.props.history.push("/home")
      }, 2000)
    }
  }
  componentWillUnmount () {
    clearTimeout(this.timer)
  }
  onChangePwd (value) {
    this.setState({
      pwd: value
    })
  }
  onLogin () {
    this.props.login(this.state.pwd)
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
                         underlineColorAndroid="transparent" onChangeText={ value => this.onChangePwd(value) } style={ [styles.text, { width: 200 }] }
              />
            </View>
          </ImageBackground>
          <ImageBackground source={ require("./login.png") } resizeMode="cover" style={ styles.loginImage }>
            <View style={ styles.container }>
              <Text onPress={ this.onLogin } style={ styles.text }>登录</Text>
            </View>
          </ImageBackground>
          { this.props.msg? (
            <ImageBackground source={ require("./msg.png") } resizeMode="cover" style={ styles.msgImage }>
              <View style={ [styles.container, { flexDirection: "row" }] }>
                { this.props.error? (
                  <Image source={ require("./warning.png") } style={ styles.warning } />
                ): null }
                <Text style={ styles.msg }>{ this.props.msg }</Text>
              </View>
            </ImageBackground>
          ): (
            <View style={ styles.msgImage } />
          ) }
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
  warning: {
    width: 11,
    height: 11,
    marginRight: 2
  },
  msg: {
    fontSize: 9,
    color: "#34c3ff"
  }
})
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

const loginError = msg => {
  return { type: LOGIN_ERROR, msg: msg }
}

const loginSuccess = msg => {
  return { type: LOGIN_SUCCESS, msg: msg }
}

export const login = pwd => {
  return async dispatch => {
    if (!pwd) {
      dispatch(loginError("统计序列号不能为空！"))
    } else if (pwd.length < 8) {
      dispatch(loginError("统计序列号必须为8位！"))
    } else {
      const response = await fetch("http://192.168.110.73:8514/TVlogin/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sn: pwd
        })
      })
      const responseJson = await response.json()
      console.log(responseJson)
      if (responseJson.status === "110000") {
        dispatch(loginSuccess(responseJson.msg))   
      } else {
        dispatch(loginError(responseJson.msg))
      }
    }
  }
}
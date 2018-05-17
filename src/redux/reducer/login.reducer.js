import { LOGIN_ERROR, LOGIN_SUCCESS } from "../action/login.action.js"

const initState = {
  isLogin: false,
  error: false,
  msg: ""
}

export const login = (state=initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLogin: true, error: false, msg: action.msg }
    case LOGIN_ERROR:
      return { ...state, error: true, msg: action.msg }
    default:
      return state
  }
}
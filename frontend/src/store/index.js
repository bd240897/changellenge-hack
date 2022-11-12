import { createStore } from 'vuex'
import login from "./modules/login/";
import chat from "./modules/chat/";
import profile from "./modules/profile/";

export default createStore({
  state() {
    return {
      BASE_URL: 'https://hack.invest-open.ru',
      CHAT_HISTORY_URL: "/chat/history",
      CHAT_SEND_URL: "/message/send",
      CHAT_ID_DIALOG_URL: '/chat/dialog',
      LOGIN_URL: "/auth",
      IS_TOKEN_VALID_URL: "/jwt/verify",
      USER_INFO_URL: "/user/info",
      // IS_TOKEN_VALID_URL_full: "https://hack.invest-open.ru/jwt/verify"
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    chat,
    profile
  }
})

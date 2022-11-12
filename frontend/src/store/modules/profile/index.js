import axios from "axios";

export default ({
    namespaced: true,
    state() {
        return {
            userInfo: {},
            id_dialog: '',
        }
    },
    getters: {
    },
    mutations: {
        SET_USER_INFO(state, userInfo) {
            state.userInfo = userInfo
        },
        SET_ID_DIALOG(state, id_dialog) {
            state.id_dialog = parseInt(id_dialog)
        },
    },
    actions: {
        getUserInfo({commit, rootState}, {url = this.state.USER_INFO_URL, userId = 100500}) {
            axios.get(url, {
                params: {userId: userId},
            })
                .then(function (x) {
                    console.log(x.data)
                    console.log('SUCCESS!!');
                    commit('SET_USER_INFO', x.data)
                })
                .catch(err => {
                    console.log(err)
                    if (err.response) {
                        console.log("client received an error response (5xx, 4xx)")
                    } else if (err.request) {
                        console.log("client never received a response, or request never left")
                    } else {
                        console.log("anything else ")
                    }
                    return err
                })
        },

        getIdDialog({commit, rootState}, {url = this.state.CHAT_ID_DIALOG_URL}) {
            axios.get(url)
                .then(function (x) {
                    console.log(x.data)
                    console.log('SUCCESS!!');
                    commit('SET_ID_DIALOG', x.data.dialogId)

                })
                .catch(err => {
                    console.log(err)
                    if (err.response) {
                        console.log("client received an error response (5xx, 4xx)")
                    } else if (err.request) {
                        console.log("client never received a response, or request never left")
                    } else {
                        console.log("anything else ")
                    }
                    return err
                })
        },
    },
})


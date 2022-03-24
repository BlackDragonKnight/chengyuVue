import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: '',
            id: '',
            phone: '',
            updateTime: '',
            departInfo: {
                id: '',
                departCode: '',
                departName: ''
            }
        }
    },
    getters:{
        userInfo(state){
            return state.user;
        }
    },
    mutations: {
        updateUser(state, loginInfo) {
            state.user = loginInfo;
        }
    },
    actions: {}
})

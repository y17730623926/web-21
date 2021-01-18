import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from "js-cookie"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 100,
        token: Cookie.get("token") || "",
        SigIn: Cookie.get("token") ? 1 : 0,
    },
    getters: {
        num: (state) => {
            return state.num > 110 ? 110 : state.num;
        }
    },
    mutations: {
        //这里的方法只能是同步函数      state表示的是state对象
        add(state, payload) {
            state.num += payload;
        },
        jian(state, payload) {
            state.num -= payload;
        },
        change_token(state, payload){
            state.token = payload;
        },
        change_SigIn(state, payload){
            state.SigIn = payload;
        },
    },
    actions: {
        add(context, payload) {
            setTimeout(() => {
                context.commit('add', payload);
            }, 1000)
            context.dispatch("test");
        },
        test() {
            console.log("我是actions里面的方法");
        },
        jian(context, payload) {
            context.commit("jian", payload);
        }
    },

})
export default store;
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        usuarios: [],
    },
    mutations: {
        inserir(state, payload){
            state.usuarios.push(payload);
        },
        remover(state, payload){
            state.usuarios.splice(payload, 1);
        },
    },
    actions: {
        novoUsuario({ commit }, payload){
            commit('inserir', payload)        
        },
        removerUsuario({ commit }, payload){
            commit('remover', payload)        
        }
    },
});
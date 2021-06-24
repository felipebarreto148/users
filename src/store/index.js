import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        usuarios: [],

        indiceParaEdicao: "",
    },
    getters: {
        getUsuario: state => {
            return state.usuarios[state.indiceParaEdicao]
        }
    },
    mutations: {
        inserir(state, payload){
            state.usuarios.push(payload);
        },
        remover(state, payload){
            state.usuarios.splice(payload, 1);
        },
        editar(state, payload){
            state.usuarios.splice(state.indiceParaEdicao, 1, payload);
        },

        inserirIndice(state, payload){
            state.indiceParaEdicao = payload;
        },
        removerIndice(state){
            state.indiceParaEdicao = "";
        },
    },
    actions: {
        novoUsuario({ commit }, payload){
            commit('inserir', payload)        
        },
        removerUsuario({ commit }, payload){
            commit('remover', payload)        
        },
        editarUsuario({ commit }, payload){
            commit('editar', payload)        
        },

        inserirIndice({ commit }, payload){
            commit('removerIndice');
            commit('inserirIndice', payload);
        },
        removerIndice({ commit }){
            commit('removerIndice');
        }
    },
});
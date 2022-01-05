import Vue from 'vue';
import Vuex from 'vuex';
import { getUsers } from '../client/users.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: [],
  },
  mutations: {
    SET_USERS_LIST (state, payload) {
      state.usersList = payload;
    },
  },
  actions: {
    async GET_USERS_LIST ({ commit }) {
      const data = await getUsers();
      commit('SET_USERS_LIST', data)
    }
  },
})

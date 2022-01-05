import Vue from 'vue';
import Vuex from 'vuex';
import { getUsers, getUserById } from '../client/users.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: [],
    userDetails: {}
  },
  mutations: {
    SET_USERS_LIST (state, payload) {
      state.usersList = payload;
    },
    SET_USERS_DETAILS (state, payload) {
      state.userDetails = payload
    },
  },
  actions: {
    async GET_USERS_LIST ({ commit }) {
      const data = await getUsers();
      commit('SET_USERS_LIST', data)
    },
    async GET_USER_BY_ID ({ commit }, params) {
      const data = await getUserById(params);
      commit('SET_USERS_DETAILS', data)
    },
  },
})

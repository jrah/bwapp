import Vue from "nativescript-vue";
import Vuex from "vuex";
import { defaultClient as apolloClient } from "./main";
import { gql } from "apollo-boost";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: {},
  },
  mutations: {
    setPages: (state, payload) => {
      state.pages = payload
    }
  },
  getters: {
    pages: state => state.pages
  },
  actions: {
    getPages: ({ commit }) => {
      // apollo client can not authenticate here because token was added in main.ts file
      apolloClient
        .query({
          query: gql`
            query getPages {
              allBoardingSchoolGuardianships {
                totalCount
              }
            `,
        })
        .then(({ data }) => {
          commit("setPages", data.pages);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});

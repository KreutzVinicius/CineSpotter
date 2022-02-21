import { createStore } from 'vuex'

import api from "../services/api";

const store = createStore({
    state() {
        return {
            works: [],
            work: {},
            client: {},
            rate: {},
        }
    },
    mutations: {
        updateWork(state, payload) {
            state.work = payload;
        },
        updateWorks(state, payload) {
            state.works = payload;
        },
        updateRate(state, payload) {
            state.rate = payload;
        },
        updateClient(state, payload) {
            state.client = payload;
        }


    },
    actions: {
        getWorks({ commit }) {
            return new Promise((resolve, reject) => {
                api
                    .get("/works/")
                    .then((response) => {
                        commit('updateWorks', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    });
            })
        },
        authenticateClient({ commit }, client) {
            return new Promise((resolve, reject) => {
                api.post("/login", client)
                    .then((response) => {
                        commit('updateClient', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })

            })
        },

        getWorkRate({ commit }, id) {
            return new Promise((resolve, reject) => {
                api
                    .post("/works/rate", id)
                    .then((response) => {
                        commit('updateRate', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })
            })
        },
    }

})

export default store;
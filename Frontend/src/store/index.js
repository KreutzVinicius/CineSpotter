import { createStore } from 'vuex'

import api from "../services/api";

const store = createStore({
    state() {
        return {
            works: [],
            work: {},
            idWork: {
                ids: "",
                listname: ""
            },
            client: {
                username: localStorage.getItem("username"),
                password: localStorage.getItem("password"),
                isLoged: localStorage.getItem("isLoged"),
                id: localStorage.getItem("id"),
            },
            rate: {},
            lists: [],
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
        },
        updateLists(state, payload) {
            state.lists = payload;
        },
        updateIdWorks(state, payload) {
            state.idWorks = payload;
        },


    },
    actions: {
        createClient({ commit }, client) {
            return new Promise((resolve, reject) => {
                api
                    .post("/client", client)
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
        getWork({ commit }, idWork) {
            return new Promise((resolve, reject) => {
                api
                    .post("/works/id", idWork)
                    .then((response) => {
                        commit('updateWork', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    });
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
        rateWork({ commit }, rate) {
            return new Promise((resolve, reject) => {
                api
                    .put("/works/rateWork", rate)
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
        getClientLists({ commit }, idClient) {
            return new Promise((resolve, reject) => {
                api
                    .post("/client/lists", idClient)
                    .then((response) => {
                        commit('updateLists', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })
            })
        },
        getIdWorksByList({ commit }, idWorks) {
            return new Promise((resolve, reject) => {
                api
                    .post("/lists/id", idWorks) // mudar pra pegar this.lists.id
                    .then((response) => {
                        commit('updateIdWorks', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })
            })
        },
        addWorksinList({ commit }, list) {
            return new Promise((resolve, reject) => {
                api
                    .put("client/lists/work", list) // mudar pra pegar this.lists.id
                    .then((response) => {
                        commit('updateLists', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })
            })
        },
        removeWorksinList({ commit }, list) {
            return new Promise((resolve, reject) => {
                api
                    .put("client/lists/removework", list) // mudar pra pegar this.lists.id
                    .then((response) => {
                        commit('updateLists', response.data);
                        resolve(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(reject);
                    })
            })
        }
    },
    getters: {
        getClient(state) {
            return state.client
        }
    }

})

export default store;
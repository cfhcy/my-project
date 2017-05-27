const state = {
    service: false,
    search: false
};
const mutations = {
    changeService(state, service) {
        state.service = !service;
    },
    changeSearch(state, search) {
        state.search = !search;
    }
};
export default {
    state,
    mutations
}
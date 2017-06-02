const state = {
    service: false,
    searchState: false
};
const mutations = {
    changeService(state, service) {
        state.service = !service;
    },
    changeSearch(state, search) {
        state.searchState = !search;
    }
};
export default {
    state,
    mutations
}
const state = {
    service: false
};
const getters = {
    service: state => state.service
};
const mutations = {
    changeService(state, service) {
        state.service = !service;
    }
};
export default {
    state,
    getters,
    mutations
}
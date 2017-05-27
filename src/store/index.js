import Vue from 'vue';
import Vuex from 'vuex';
import mainService from './modules/mainService';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mainService
    }
})
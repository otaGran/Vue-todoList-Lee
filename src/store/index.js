// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations'

Vue.config.productionTip = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newItem: '',
    list: [],
    filter: 'all',
  },
  getters,
  actions,
  mutations,
});

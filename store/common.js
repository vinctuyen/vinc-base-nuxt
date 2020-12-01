import { PAGING } from "../config/const";
const state = () => ({
  // paging
  pageActive: PAGING.pageActive,
  totalPage: PAGING.totalPage,
  perPage: PAGING.perPage,
});
const getters = {};
const mutations = {
  SET_PAGING(state, paging) {
    state.pageActive = paging.pageActive;
    state.totalPage = paging.totalPage;
    state.perPage = paging.perPage;
  },
};
const actions = {
  setPaging({ commit }, paging) {
    commit("SET_PAGING", paging);
  },
};

export default { namespaced: true, state, getters, mutations, actions };

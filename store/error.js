const state = () => ({ code: null, message: "" });
const getters = {};
const mutations = {
  SET_ERROR(state, { code, message }) {
    state.code = code;
    state.message = message;
  },
};
const actions = {
  setError({ commit }, error) {
    commit("SET_ERROR", error);
  },
};

export default { namespaced: true, state, getters, mutations, actions };

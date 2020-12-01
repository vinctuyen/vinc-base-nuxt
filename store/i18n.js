const state = () => ({ locales: ["en", "jp"], locale: "en" });

const getters = {};

const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
};

export default { namespaced: true, state, getters, mutations };

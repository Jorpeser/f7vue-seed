import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    user: null
  },
  getters: {
    user: (state) => state.user
  },
  actions: {
    setUser({ state }, user) {
      state.user = user;
    }
  }
});

export default store;
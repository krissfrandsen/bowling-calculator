import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { IGame } from "@/types/game";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { initialState } from "./state";

Vue.use(Vuex);

const store: StoreOptions<IGame> = {
  state: initialState(),
  actions,
  mutations,
  getters,
};

export default new Vuex.Store<IGame>(store);

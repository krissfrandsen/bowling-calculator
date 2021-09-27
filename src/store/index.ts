import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { IFrame } from "@/types/frame"; //@ refers to src
import { IPlayer } from "@/types/player";
import { IGame } from "@/types/game";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./state";

Vue.use(Vuex);

const store: StoreOptions<IGame> = {
  state,
  actions,
  mutations,
  getters,
};

export default new Vuex.Store<IGame>(store);

import Vue from "vue";
import Vuex from "vuex";
import { IFrame } from "@/types/frame"; //@ refers to src
import { IPlayer } from "@/types/player";
import { IGame } from "@/types/game";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game: {
      playerList: [],
    },
    player: {
      name: "",
      id: 0,
      frames: [],
    },
    frame: {
      rolls: [],
      score: 0,
      isStrike: false,
      isSpare: false,
    },
  },
  mutations: {
    //set state.player to whatever we pass from the component
    CHANGE_NAME(state, name) {
      state.player.name = name;
    },
  },
  actions: {
    changeName({ commit }, name) {
      return commit("CHANGE_NAME", name);
    },
    createFrames() {
      for (let i = 0; i < 9; i++) {
        return;
        //this.state.player.frames[i].push(this.state)
      }
    },
  },
  getters: {
    getName: (state) => {
      return state.player.name;
    },
  },
  modules: {},
});

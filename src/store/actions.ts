import { IFrame } from "@/types/frame";
import { ActionTree } from "vuex";
import { IGame } from "@/types/game";
import { calculateScore } from "@/helpers/helper";

export const actions: ActionTree<IGame, IGame> = {
  reset({ commit }) {
    commit("RESET_STATE");
  },

  changeName({ commit }, name) {
    return commit("CHANGE_NAME", name);
  },

  addFrames({ commit }, frames) {
    return commit("SET_FRAMES", [...this.state.playerList[0].frames, frames]);
  },

  addPinToFrame({ commit, dispatch, state }, { frame, pin }) {
    frame.rolls.push(pin);
    //lägg till för strike
    if (pin === 10) {
      frame.rolls.push(0);
    }

    if (frame.rolls.length === 2) {
      frame.score = calculateScore(frame, state.playerList[0].frames, pin);
    }

    commit("UPDATE_FRAME", {
      frame,
    });

    if (frame.rolls.length === 2) {
      dispatch("addNextFrame", frame.index + 1);
    }
  },

  addNextFrame({ commit }, index) {
    const frame: IFrame = {
      rolls: [],
      score: 0,
      index,
    };

    commit("ADD_FRAME", frame);
  },
};

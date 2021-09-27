import { IGame } from "@/types/game";
import { MutationTree } from "vuex";

export const mutations: MutationTree<IGame> = {
  //set state.player to whatever we pass from the component
  CHANGE_NAME(state, name) {
    state.playerList[0].name = name;
  },
  ADD_FRAME(state, frame) {
    state.playerList[0].frames.push(frame);
    console.log(frame);
  },
  UPDATE_FRAME(state, { frameIndex, pin }) {
    state.playerList[0].frames[frameIndex].rolls.push(pin);

    // state.game.playerList[0].frames[frameIndex] = { ...frame };
  },
  SET_SCORE(state, { score, frameIndex }) {
    state.playerList[0].frames[frameIndex].score = score;
  },
  SET_STRIKE(state, { frameIndex, isStrike }) {
    console.log(frameIndex);
    state.playerList[0].frames[frameIndex].isStrike = isStrike;
  },
};

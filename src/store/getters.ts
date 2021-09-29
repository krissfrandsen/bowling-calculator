import { IGame } from "@/types/game";
import { GetterTree } from "vuex";

export const getters: GetterTree<IGame, IGame> = {
  getName: (state) => {
    return state.playerList[0].name;
  },
  getFramesList: (state) => {
    return state.playerList[0].frames;
  },
  currentFrame: (state) => {
    return state.playerList[0].frames[state.playerList[0].frames?.length - 1];
  },
};

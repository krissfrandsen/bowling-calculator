import { IGame } from "@/types/game";
import { GetterTree } from "vuex";

export const getters: GetterTree<IGame, IGame> = {
  getName: (state) => {
    //pass id as index identifier
    return state.playerList[0].name;
  },
  getNoOfFrames: (state) => {
    return state.numberOfFrames;
  },
  getFramesList: (state) => {
    return state.playerList[0].frames;
  },
  getCurrentFrame: (state) => {
    return state.playerList[0].frames?.length - 1;
  },
};

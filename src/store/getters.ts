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
  checkIfFirstRoll: (state) => {
    const currentIndex = state.playerList[0].frames?.length;
    return state.playerList[0].frames[currentIndex].rolls.length === 0;
  },
  checkPrevFrameIsSpare: (state) => {
    const currentIndex = state.playerList[0].frames?.length;
    return (
      currentIndex > 0 &&
      state.playerList[0].frames[currentIndex - 1].rolls[0] !== 10 &&
      state.playerList[0].frames[currentIndex - 1].rolls[0] +
        state.playerList[0].frames[currentIndex - 1].rolls[1] ===
        10
    );
  },
  checkPrevFrameIsStrike: (state) => {
    const currentIndex = state.playerList[0].frames?.length;
    return (
      currentIndex > 0 &&
      state.playerList[0].frames[currentIndex - 1].rolls[0] === 10
    );
  },
  checkPrevPrevFrameIsStrike: (state) => {
    const currentIndex = state.playerList[0].frames?.length;
    return (
      currentIndex > 0 &&
      state.playerList[0].frames[currentIndex - 2].rolls[0] === 10
    );
  },
};

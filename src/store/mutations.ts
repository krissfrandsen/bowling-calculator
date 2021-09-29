import { IFrame } from "@/types/frame";
import { IGame } from "@/types/game";
import { MutationTree } from "vuex";
import { initialState } from "./state";

export const mutations: MutationTree<IGame> = {
  //set state.player to whatever we pass from the component
  CHANGE_NAME(state, name) {
    state.playerList[0].name = name;
  },
  SET_FRAMES(state, frames) {
    state.playerList[0].frames = frames;
  },
  ADD_FRAME(state, frame) {
    state.playerList[0].frames.push(frame);
  },
  UPDATE_FRAME(state, { frame }) {
    state.playerList[0].frames.map((stateFrame: IFrame) => {
      stateFrame.index === frame.index ? frame : stateFrame;
    });
  },
  RESET_STATE(state) {
    Object.assign(state, initialState());
  },
};

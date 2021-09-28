import Vue from "vue";
import Vuex from "vuex";
import { IFrame } from "@/types/frame"; //@ refers to src
import { IGame } from "@/types/game";
import { isSpare, isStrike } from "@/helpers/helper";

Vue.use(Vuex);

export interface IGameState {
  game: IGame;
  numberOfFrames: number;
  nameList: string[];
}

//Helpers. Should be in a helper file
function getAllRolls(frames): number[] {
  return frames.flatMap((frame: IFrame) => {
    return frame.rolls.filter((role: number) => role !== 0);
  });
}

function getSumOfLastTwoRolls(rolls: number[]): number {
  return rolls.slice(-1).reduce((a, b) => a + b, 0);
}

function calculateScore(currentFrame: IFrame, frames: IFrame[], pin: number) {
  //Lägg till hjälpfunktion
  if (currentFrame.index === 1) {
    return currentFrame.rolls.reduce((a, b) => a + b, 0);
  }
  //Lägg till hjälpfunktion
  const lastFrame: IFrame = frames.find(
    (stateFrame: IFrame) => stateFrame.index === currentFrame.index - 1
  );
  if (isStrike(lastFrame.rolls[0])) {
    // gör uträkningen för strike
    // man får 10 + de två senaste slagen + de två slagen man slagit
    return (
      lastFrame.score +
      getSumOfLastTwoRolls(getAllRolls(frames)) +
      currentFrame.rolls.reduce((a, b) => a + b, 0)
    );
  }
  if (isSpare(lastFrame.rolls[0], lastFrame.rolls[1])) {
    return 999;
    // gör uträkningen för spare
  }
  return (
    frames.find(
      (stateFrame: IFrame) => stateFrame.index === currentFrame.index - 1
    ).score + currentFrame.rolls.reduce((a, b) => a + b, 0)
  );
}

export default new Vuex.Store<IGameState>({
  state: {
    numberOfFrames: 10,
    nameList: [],
    game: {
      playerList: [
        {
          id: 0,
          name: "",
          frames: [
            {
              rolls: [],
              score: 0,
              isSpare: false,
              isStrike: false,
              index: 1,
            },
          ],
        },
      ],
    },
  },
  mutations: {
    //set state.player to whatever we pass from the component
    CHANGE_NAME(state, name) {
      state.game.playerList[0].name = name;
    },
    ADD_NAME(state, name) {
      state.nameList = name;
    },
    SET_FRAMES(state, frames) {
      state.game.playerList[0].frames = frames;
    },
    ADD_FRAME(state, frame) {
      state.game.playerList[0].frames.push(frame);
      console.log(frame);
    },
    UPDATE_FRAME(state, { frame }) {
      state.game.playerList[0].frames.map((stateFrame: IFrame) => {
        stateFrame.index === frame.index ? frame : stateFrame;
      });
    },
  },
  actions: {
    changeName({ commit }, name) {
      return commit("CHANGE_NAME", name);
    },
    addName({ commit }, name) {
      return commit("ADD_NAME", [...this.state.nameList, name]);
    },
    addFrames({ commit }, frames) {
      return commit("SET_FRAMES", [
        ...this.state.game.playerList[0].frames,
        frames,
      ]);
    },
    addPinToFrame({ commit, dispatch, state }, { frameIndex, frame, pin }) {
      frame.rolls.push(pin);
      //lägg till för strike
      if (pin === 10) {
        frame.rolls.push(0);
      }
      if (frame.rolls.length === 2) {
        frame.score = calculateScore(
          frame,
          state.game.playerList[0].frames,
          pin
        );
      }

      commit("UPDATE_FRAME", {
        frame,
      });

      if (frame.rolls.length === 2) {
        dispatch("addNextFrame", frameIndex + 1);
      }
    },
    addNextFrame({ commit }, index) {
      const frame: IFrame = {
        rolls: [],
        score: 0,
        isStrike: false,
        isSpare: false,
        index,
      };
      commit("ADD_FRAME", frame);
    },
  },
  getters: {
    getName: (state) => {
      //pass id as index identifier
      return state.game.playerList[0].name;
    },
    getNoOfFrames: (state) => {
      return state.numberOfFrames;
    },
    getFramesList: (state) => {
      return state.game.playerList[0].frames;
    },
    getCurrentFrame: (state) => {
      return state.game.playerList[0].frames?.length;
    },
    currentFrame: (state) => {
      return state.game.playerList[0].frames[
        state.game.playerList[0].frames?.length - 1
      ];
    },
  },
  modules: {},
});

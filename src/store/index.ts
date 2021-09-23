import Vue from "vue";
import Vuex from "vuex";
import { IFrame } from "@/types/frame"; //@ refers to src
import { IPlayer } from "@/types/player";
import { IGame } from "@/types/game";

Vue.use(Vuex);

export interface IGameState {
  game: IGame;
  numberOfFrames: number;
  nameList: string[];
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
    UPDATE_FRAME(state, { frameIndex, frame }) {
      //state.game.playerList[0].frames[frameIndex].rolls.push(pin);
      console.log("frame", frame);
      state.game.playerList[0].frames[frameIndex] = { ...frame };
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
    addPinToFrame({ commit, dispatch, state }, { frameIndex, pin }) {
      //Om första slaget. Skapa första framen
      if (this.state.game.playerList[0].frames.length === 0) {
        dispatch("addFrame");
        console.log("lägger till");
      }

      const currentFrame: IFrame = state.game.playerList[0].frames[frameIndex];
      //Kollar om det är första slaget
      if (
        this.state.game.playerList[0].frames[frameIndex]?.rolls.length === 0
      ) {
        //är det en strike?
        //är det en spare?
        //currentFrame.rolls.push(pin);
        console.log("frame", currentFrame);
        commit("UPDATE_FRAME", {
          frameIndex: frameIndex,
          frame: { ...pin },
        });
      } else {
        //Andra slaget
        commit("UPDATE_FRAME", {
          frameIndex: frameIndex,
          frame: { ...pin },
        });
        dispatch("addFrame");
      }

      // 1. ta reda på vilken frame vi är på
      // 2. ta reda på om det är första eller andra slaget

      // ha en koll om current frame har två slag i sig i rolls
      // om ja - skapa en ny frame
      // om nej - lägg till värdet i framen
    },
    addFrame({ commit }) {
      const frame: IFrame = {
        rolls: [],
        score: 0,
        isStrike: false,
        isSpare: false,
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
      return state.game.playerList[0].frames?.length - 1;
    },
  },
  modules: {},
});

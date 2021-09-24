import Vue from "vue";
import Vuex from "vuex";
import { IFrame } from "@/types/frame"; //@ refers to src
import { IPlayer } from "@/types/player";
import { IGame } from "@/types/game";
import bowlingHelper from "@/helpers/helper";
Vue.use(Vuex);

export interface IGameState {
  game: IGame;
  numberOfFrames: number;
}

export default new Vuex.Store<IGameState>({
  state: {
    numberOfFrames: 10,
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
    ADD_FRAME(state, frame) {
      state.game.playerList[0].frames.push(frame);
      console.log(frame);
    },
    UPDATE_FRAME(state, { frameIndex, pin }) {
      state.game.playerList[0].frames[frameIndex].rolls.push(pin);

      // state.game.playerList[0].frames[frameIndex] = { ...frame };
    },
    SET_SCORE(state, { score, frameIndex }) {
      state.game.playerList[0].frames[frameIndex].score = score;
    },
    SET_STRIKE(state, { frameIndex, isStrike }) {
      console.log(frameIndex);
      state.game.playerList[0].frames[frameIndex].isStrike = isStrike;
    },
  },
  actions: {
    changeName({ commit }, name) {
      return commit("CHANGE_NAME", name);
    },
    addPinToFrame({ commit, dispatch, state }, { frameIndex, pin }) {
      //Om första slaget. Skapa första framen
      if (this.state.game.playerList[0].frames.length === 0) {
        dispatch("addFrame");
      }

      const currentFrame: IFrame = state.game.playerList[0].frames[frameIndex];
      //Kollar om det är första slaget
      if (currentFrame?.rolls.length === 0) {
        if (pin === 10) {
          commit("UPDATE_FRAME", {
            frameIndex: frameIndex,
            pin: pin,
          });
          commit("SET_STRIKE", {
            frameIndex: frameIndex,
            isStrike: true,
          });
          const score = bowlingHelper.calculateScore(currentFrame?.rolls);
          dispatch("setScore", {
            score,
            frameIndex,
          });
          dispatch("addFrame");
        }
        if (!currentFrame?.isStrike) {
          commit("UPDATE_FRAME", {
            frameIndex: frameIndex,
            pin: pin,
          });
        }
      } else {
        commit("UPDATE_FRAME", {
          frameIndex: frameIndex,
          pin: pin,
        });
        const score = bowlingHelper.calculateScore(currentFrame?.rolls);
        dispatch("setScore", {
          score: score,
          frameIndex: frameIndex,
        });
        dispatch("addFrame");
      }
      // if (
      //   this.state.game.playerList[0].frames[frameIndex]?.rolls.length === 1
      // ) {
      //   commit("UPDATE_FRAME", {
      //     frameIndex: frameIndex,
      //     pin: pin,
      //     isStrike: false,
      //     isSpare: false,
      //     score: bowlingHelper.calculateScore(
      //       this.state.game.playerList[0].frames[frameIndex]?.rolls
      //     ),
      //   });
      // }

      //   //är det en strike?
      //   //är det en spare?
      //   //currentFrame.rolls.push(pin);
      //   commit("UPDATE_FRAME", {
      //     frameIndex: frameIndex,
      //     pin: pin,
      //   });
      // } else {
      //   //Andra slaget
      //   commit("UPDATE_FRAME", {
      //     frameIndex: frameIndex,
      //     pin: pin,
      //   });

      //   dispatch("addFrame");

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
    setScore({ commit }, score) {
      commit("SET_SCORE", score);
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

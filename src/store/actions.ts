import { IFrame } from "@/types/frame";
import bowlingHelper from "@/helpers/helper";
import { ActionTree } from "vuex";
import { IGame } from "@/types/game";

export const actions: ActionTree<IGame, IGame> = {
  changeName({ commit }, name) {
    return commit("CHANGE_NAME", name);
  },
  addPinToFrame({ commit, dispatch, state }, { frameIndex, pin }) {
    //Om första slaget. Skapa första framen
    if (this.state.playerList[0].frames.length === 0) {
      dispatch("addFrame");
    }
    //check if previous frame is strike
    // if (this.getters.checkPrevFrameIsStrike) {

    // }

    const currentFrame: IFrame = state.playerList[0].frames[frameIndex];
    //Kollar om det är första slaget
    if (currentFrame?.rolls.length === 0) {
      if (pin === 10) {
        commit("UPDATE_FRAME", {
          frameIndex,
          pin,
        });

        commit("SET_STRIKE", {
          frameIndex,
          isStrike: true,
        });
        const score = bowlingHelper.calculateScore(currentFrame?.rolls);
        dispatch("setScore", {
          frameIndex,
          score,
        });

        dispatch("addFrame");
      } else {
        //First pin if not strike
        commit("UPDATE_FRAME", {
          frameIndex,
          pin,
        });
      }

      // go outside first if
    } else {
      // Second pin if not strike
      commit("UPDATE_FRAME", {
        frameIndex,
        pin,
      });
      if (currentFrame?.rolls[0] + currentFrame?.rolls[1] === 10) {
        commit("SET_SPARE", {
          frameIndex,
          isSpare: true,
        });
      }
      const score = bowlingHelper.calculateScore(currentFrame?.rolls);
      dispatch("setScore", {
        score,
        frameIndex,
      });
      dispatch("addFrame");
    }

    // Check previous frame if strike
    if (
      frameIndex > 0 &&
      state.playerList[0].frames[frameIndex - 1].rolls[0] === 10
    ) {
      console.log("hello from checkstrike if");
      // commit("UPDATE_FRAME", {
      //   frameIndex,
      //   pin: pin,
      // });
      const score = bowlingHelper.calculateScore(currentFrame?.rolls);
      dispatch("setScore", {
        frameIndex: frameIndex - 1,
        score: 10 + score,
      });
      dispatch("addFrame");
    }

    //Check previous frame is spare
    if (
      frameIndex > 0 &&
      state.playerList[0].frames[frameIndex - 1].rolls[0] +
        state.playerList[0].frames[frameIndex - 1].rolls[1] ===
        10
    ) {
      console.log("roll1", state.playerList[0].frames[frameIndex].rolls[0]);
      commit("UPDATE_FRAME", {
        frameIndex,
        pin,
      });
      dispatch("setScore", {
        frameIndex: frameIndex - 1,
        score: 10 + state.playerList[0].frames[frameIndex].rolls[0],
      });
      dispatch("addFrame");
    }
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
};

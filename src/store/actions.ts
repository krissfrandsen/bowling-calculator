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

    const currentFrame: IFrame = state.playerList[0].frames[frameIndex];
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
};

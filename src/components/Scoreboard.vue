<template>
  <div class="player-wrapper">
    <Player />
    {{ getFramesList }}
    <ScorecardList :numberOfFrames="numberOfFrames" />
    <Pins :pins="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" @number="pinHandler" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Player from "./Player.vue";
import ScorecardList from "./ScorecardList.vue";
import Pins from "./Pins.vue";
import { IFrame } from "@/types/frame";
import { mapGetters, mapState } from "vuex";

@Component({
  components: {
    Player,
    ScorecardList,
    Pins,
  },
  computed: {
    ...mapGetters(["getFramesList"]),
    ...mapState(["numberOfFrames"]),
  },
})
export default class Scoreboard extends Vue {
  pinHandler(number: number) {
    this.$store.dispatch("addPinToFrame", {
      frameIndex: this.$store.getters.getCurrentFrame,
      pin: number,
    });
    // this.frames[this.currentRound].rolls.push(number);

    // this.checkStrike(number);
    // this.checkSpare(number);

    // if (number === 10) {
    //   this.frames[this.currentRound].isStrike = true;
    //   this.calculateScore();
    //   this.currentRound++;
    // } else if (
    //   this.frames[this.currentRound].rolls[0] +
    //     this.frames[this.currentRound].rolls[1] ===
    //   10
    // ) {
    //   this.frames[this.currentRound].isSpare = true;
    //   this.calculateScore();
    //   this.currentRound++;
    // } else if (this.frames[this.currentRound].rolls.length === 2) {
    //   this.calculateScore();
    //   this.currentRound++;
    // } else if (this.currentRound === this.lastRound.index) {
    //   return;
    // }
  }

  // calculateScore() {
  //   const firstScore = this.frames[this.currentRound].rolls[0];
  //   const secondScore = this.frames[this.currentRound].rolls[1] ?? 0;

  //   this.frames[this.currentRound].score = firstScore + secondScore;

  //   if (this.currentRound !== 0) {
  //     const previousScore = this.frames[this.currentRound - 1].score;
  //     this.frames[this.currentRound].score += previousScore; // score from current round will be score + previous score
  //   }
  // }

  // checkStrike(number: number) {
  //   if (this.frames[this.currentRound - 1]) {
  //     if (this.frames[this.currentRound - 1].isStrike) {
  //       this.frames[this.currentRound - 1].score += number;
  //       if (!this.frames[this.currentRound].rolls[1]) {
  //         this.checkDoubleStrike(number);
  //       }
  //     }
  //   }
  // }

  // checkSpare(number: number) {
  //   if (this.frames[this.currentRound - 1]) {
  //     if (this.frames[this.currentRound - 1].isSpare) {
  //       if (!this.frames[this.currentRound].rolls[1]) {
  //         const spareNumber = this.frames[this.currentRound].rolls[0];
  //         this.frames[this.currentRound - 1].score += spareNumber;
  //       }
  //     }
  //   }
  // }

  // checkDoubleStrike(number: number) {
  //   if (this.frames[this.currentRound - 2]) {
  //     if (this.frames[this.currentRound - 2].isStrike) {
  //       this.frames[this.currentRound - 2].score += number;
  //     }
  //   }
  // }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

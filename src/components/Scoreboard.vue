<template>
  <div class="player-wrapper">
    <Player />
    <div>current {{ currentFrame.index }}</div>
    <ScorecardList :numberOfFrames="numberOfFrames" :frames="frames" />
    <Pins
      :pins="pinList"
      @number="pinHandler"
      :currentFrameRolls="currentFrameRolls"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Player from "./Player.vue";
import ScorecardList from "./ScorecardList.vue";
import Pins from "./Pins.vue";
import { IFrame } from "@/types/frame";
import { Getter, State } from "vuex-class";
import { IPlayer } from "@/types/player";
import { maxPoint } from "@/variables/variables";

@Component({
  components: {
    Player,
    ScorecardList,
    Pins,
  },
})
export default class Scoreboard extends Vue {
  @Prop() player!: IPlayer;
  @Getter("getFramesList") framesList: IFrame[];
  @Getter("currentFrame")
  currentFrame: IFrame;
  @State("numberOfFrames")
  numberOfFrames: number;

  currentRound = 0;
  totalScore = 0;
  pinList: number[] = [];

  get frames(): IFrame[] {
    return this.player.frames;
  }

  get currentFrameRolls(): number[] {
    return this.currentFrame.rolls || [99];
  }

  pinHandler(number: number) {
    this.$store.dispatch("addPinToFrame", {
      frameIndex: this.$store.getters.getCurrentFrame,
      frame: this.$store.getters.currentFrame,
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

  /* calculateScore() {
    const firstScore = this.frames[this.currentRound].rolls[0];
    const secondScore = this.frames[this.currentRound].rolls[1] ?? 0;

    this.frames[this.currentRound].score = firstScore + secondScore;

    if (this.currentRound !== 0) {
      const previousScore = this.frames[this.currentRound - 1].score;
      this.frames[this.currentRound].score += previousScore; // score from current round will be score + previous score
    }
  }

  checkStrike(number: number) {
    if (this.frames[this.currentRound - 1]) {
      if (this.frames[this.currentRound - 1].isStrike) {
        this.frames[this.currentRound - 1].score += number;
        if (!this.frames[this.currentRound].rolls[1]) {
          this.checkDoubleStrike(number);
        }
      }
    }
  }

  checkSpare(number: number) {
    if (this.frames[this.currentRound - 1]) {
      if (this.frames[this.currentRound - 1].isSpare) {
        if (!this.frames[this.currentRound].rolls[1]) {
          const spareNumber = this.frames[this.currentRound].rolls[0];
          this.frames[this.currentRound - 1].score += spareNumber;
        }
      }
    }
  }

  checkDoubleStrike(number: number) {
    if (this.frames[this.currentRound - 2]) {
      if (this.frames[this.currentRound - 2].isStrike) {
        this.frames[this.currentRound - 2].score += number;
      }
    }
  } */

  mounted() {
    for (let i = 0; i <= maxPoint; i++) {
      this.pinList.push(i);
    }
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

<template>
  <div class="player-wrapper">
    <Player />
    <ScorecardList :framesList="frames" />
    <Pins
      :pins="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      @number="pinHandler"
      :framesList="frames"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Player from "./Player.vue";
import ScorecardList from "./ScorecardList.vue";
import Pins from "./Pins.vue";

@Component({
  components: {
    Player,
    ScorecardList,
    Pins,
  },
})
export default class Scoreboard extends Vue {
  currentRound = 0;
  totalScore = 0;

  frames: any[] = [
    {
      isStrike: false,
      isSpare: false,
      score: 0,
      rolls: [],
    },
    {
      isStrike: false,
      isSpare: false,
      score: 0,
      rolls: [],
    },
    {
      isStrike: false,
      isSpare: false,
      score: 0,
      rolls: [],
    },
    {
      score: 0,
      rolls: [],
    },
    {
      score: 0,
      rolls: [],
    },
    {
      score: 0,
      rolls: [],
    },
    {
      score: 0,
      rolls: [],
    },
    {
      score: 0,
      rolls: [],
    },
    {
      score: 0,
      rolls: [],
    },
  ];

  lastRound = this.frames[this.frames.length - 1];
  // numberOfRolls = this.frames[this.currentRound].rolls.length;
  // const previousRoll = this.frames[this.currentRound - 1].rolls[1];
  // const prePreviousRoll = this.frames[this.currentRound - 1].rolls[0];

  pinHandler(number: number) {
    this.frames[this.currentRound].rolls.push(number);

    this.checkStrike(number);

    //not working
    if (this.frames[this.currentRound - 1]) {
      if (this.frames[this.currentRound - 1].isSpare) {
        const spareNumber = this.frames[this.currentRound].rolls[0];
        this.frames[this.currentRound - 1].score += spareNumber;
      }
    }

    if (number === 10) {
      this.frames[this.currentRound].isStrike = true;
      this.calculateScore();
      this.currentRound++;
    } else if (
      this.frames[this.currentRound].rolls[0] +
        this.frames[this.currentRound].rolls[1] ===
      10
    ) {
      this.frames[this.currentRound].isSpare = true;
      this.calculateScore();
      this.currentRound++;
    } else if (this.frames[this.currentRound].rolls.length === 2) {
      this.calculateScore();
      this.currentRound++;
    } else if (this.currentRound === this.lastRound.index) {
      return;
    }
  }

  calculateScore() {
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
      }
    }
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

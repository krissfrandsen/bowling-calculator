<template>
  <div class="player-wrapper">
    <Player name="Player 1" />
    <ScorecardList :framesList="frames" />
    <Pins
      :pins="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      @number="handleNumber"
      :framesList="frames"
      @reset-scorecard="resetScorecard"
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

  frames: any[] = [
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

  resetScorecard() {
    this.frames = [
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
  }

  lastRound = this.frames[this.frames.length - 1];
  // numberOfRolls = this.frames[this.currentRound].rolls.length;

  handleNumber(number: number) {
    this.frames[this.currentRound].rolls.push(number);

    if (number === 10) {
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

    // const previousScore = this.frames[this.currentRound].score
    //   ? this.frames[this.currentRound - 1].score
    //   : 0;

    this.frames[this.currentRound].score = firstScore + secondScore;
    console.log("score", this.frames[this.currentRound].score);
    if (this.currentRound !== 0) {
      const previousScore = this.frames[this.currentRound - 1].score ?? 0;
      this.frames[this.currentRound].score += previousScore;
      console.log(" previous score", previousScore);
    }
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

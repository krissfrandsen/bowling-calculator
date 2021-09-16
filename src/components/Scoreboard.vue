<template>
  <div class="player-wrapper">
    <Player name="Player 1" />
    <ScorecardList :gameList="game" />
    <Pins
      :pins="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      @number="handleNumber"
      :gameList="game"
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

  game: any[] = [
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
    {
      score: 0,
      shots: [],
    },
  ];

  lastRound = this.game[this.game.length - 1];

  handleNumber(number: number) {
    this.game[this.currentRound].shots.push(number);
    if (number === 10) {
      this.calculateScore();
      this.currentRound++;
      console.log(this.game[this.currentRound - 1].score);
    } else if (this.game[this.currentRound].shots.length === 2) {
      this.calculateScore();
      this.currentRound++;
    } else if (this.currentRound === this.lastRound.index) {
      return;
    }
  }

  calculateScore() {
    const firstScore = this.game[this.currentRound].shots[0];
    const secondScore = this.game[this.currentRound].shots[1] ?? 0;

    const sum = firstScore + secondScore;
    this.game[this.currentRound].score = sum;
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

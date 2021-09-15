<template>
  <div class="player-wrapper">
    <Player name="Player 1" />
    <ScorecardList :usedPins="usedPins" :game="game" />
    <Pins
      :pins="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      @number="handleNumber"
      :usedPins="usedPins"
    />
    {{ usedPins }}
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

  usedPins: number[] = [];

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
    // Todo:
    // Current shots
    // Check length of shots
    // Function for returning score - getCurrentRound()

    this.game[this.currentRound].shots.push(number);
    if (number === 10) {
      this.currentRound++;
    } else if (this.game[this.currentRound].shots.length === 2) {
      this.calculateScore(this.game[this.currentRound].shots);
      this.currentRound++;
    } else if (this.currentRound === this.lastRound.index) {
      return;
    }
  }

  calculateScore(arr: any) {
    const x = this.game[this.currentRound].shots[0];
    const y = this.game[this.currentRound].shots[1];
    console.log(arr.value);
    //this.game[this.currentRound].score
    //destructure Array
    // plus 2 numbers together
    // update score variable inside game object
    //roll1() + roll2() = 3
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

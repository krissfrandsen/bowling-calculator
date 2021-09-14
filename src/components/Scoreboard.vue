<template>
  <div class="player-wrapper">
    <Player name="Player 1" />
    <ScorecardList :usedPins="usedPins" :game="game" />
    <Pins
      :pins="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
      @number="handleNumber"
      :usedPins="usedPins"
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
  frame: any[] = [];

  usedPins: number[] = [];
  game: any[] = [
    {
      index: 0,
      shots: [],
    },
    {
      index: 1,
      shots: [],
    },
    {
      index: 2,
      shots: [],
    },
  ];

  handleNumber(number: number) {
    // Todo:
    // Current shots
    // Check length of shots
    // Function for returning index - getCurrentRound()
    return this.game[0].shots.push(number);
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

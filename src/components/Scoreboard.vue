<template>
  <div class="player-wrapper">
    <Player name="Player 1" />
    <ScorecardList :usedPins="usedPins" />
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
  usedPins: number[] = [];

  handleNumber(number: number) {
    this.usedPins.push(number);
  }
}
</script>

<style scoped lang="scss">
.player-wrapper {
  width: 75rem;
}
</style>

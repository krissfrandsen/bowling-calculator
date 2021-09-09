<template>
  <div class="player-wrapper">
    <Player name="Player 1"/>
    <ScorecardList />
    <Pins />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Player from "./Player.vue"; 
import ScorecardList from "./ScorecardList.vue"; 
import Pins from "./Pins.vue"; 

@Component({
  components: {
    Player, ScorecardList, Pins
  },
})
export default class Scoreboard extends Vue {}

</script>

<style scoped lang="scss">
.player-wrapper {
     width: 75rem;
}

</style>

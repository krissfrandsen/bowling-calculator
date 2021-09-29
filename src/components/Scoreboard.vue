<template>
  <div class="player-wrapper">
    <Player />
    <div>current round index: {{ currentFrame.index }}</div>
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
  @Getter("currentFrame") currentFrame: IFrame;
  @State("numberOfFrames") numberOfFrames: number;

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
      frame: this.$store.getters.currentFrame,
      pin: number,
    });
  }

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

<template>
  <div class="add-player-wrapper">
    <ScorecardItem
      v-for="frameIndex in numberOfBaseFrames"
      :key="frameIndex"
      :rolls="getRolesForFrame(frameIndex)"
      :result="getResultForFrame(frameIndex)"
    ></ScorecardItem>
    <FinalScorecardItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ScorecardItem from "./ScorecardItem.vue";
import FinalScorecardItem from "./FinalScorecardItem.vue";
import { IFrame } from "@/types/frame";
import { maxPoint } from "@/variables/variables";

@Component({
  components: {
    ScorecardItem,
    FinalScorecardItem,
  },
})
export default class ScorecardList extends Vue {
  @Prop() frames!: IFrame[];
  @Prop() numberOfFrames!: number;

  get numberOfBaseFrames(): number {
    return this.numberOfFrames - 1 > 0 ? this.numberOfFrames - 1 : 1;
  }

  // isLastFrame(): boolean {
  //   return this.frames.length - 1 === maxPoint ? true : false;
  // }

  getRolesForFrame(index: number): number[] {
    return this.frames[index - 1]?.rolls || [];
  }

  getResultForFrame(index: number): string {
    return this.frames[index - 1]?.score.toString() || "-";
  }
}
</script>

<style scoped lang="scss">
.add-player-wrapper {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>

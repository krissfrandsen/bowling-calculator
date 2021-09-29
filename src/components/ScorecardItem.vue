<template>
  <div class="scorecard">
    <div class="container">
      <div class="first-score">
        <span>{{ firstRoll }}</span>
      </div>
      <div class="second-score">
        <span>{{ secondRoll }}</span>
      </div>
    </div>
    <div class="result" v-if="resultScore > 0">
      {{ resultScore }}
    </div>
  </div>
</template>

<script lang="ts">
import { maxPoint } from "@/variables/variables";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ScorecardItem extends Vue {
  @Prop() rolls?: number[];
  @Prop() result!: number;

  get rollOne(): number {
    return this.rolls[0] || 0;
  }

  get rollTwo(): number {
    return this.rolls[1] || 0;
  }

  get firstRoll(): string {
    if (this.rollOne === maxPoint) {
      return "X";
    } else {
      return this.rolls[0]?.toString() || "";
    }
  }

  get secondRoll(): string {
    if (this.rollOne === maxPoint) {
      return "-";
    } else if (this.rollOne + this.rollTwo === maxPoint) {
      return "/";
    } else {
      return this.rolls[1]?.toString() || "";
    }
  }

  get resultScore(): string {
    if (this.result === maxPoint) {
      return "";
    }
    return this.result.toString();
  }
}
</script>

<style scoped lang="scss">
.scorecard {
  display: flex;
  flex-wrap: wrap;
  width: 6rem;
  height: 6rem;
  border: 1px solid #9a9a95;
  border-radius: 4px;
  background: #f6bd60;
  margin: 3px;
  // border-radius: 3px;
  .container {
    display: flex;
    flex-direction: row;
    width: 5.9rem;
  }
  .first-score {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .second-score {
    @extend .first-score;
    border: 1px solid #9a9a95;
    border-style: none none solid solid;
  }
  .result {
    align-self: flex-end;
    width: 6rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    justify-content: center;
    align-items: center;
  }
}
</style>

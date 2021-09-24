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
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ScorecardItem extends Vue {
  @Prop() private rolls?: number[];
  @Prop() private result?: number;

  maxPins = 10;

  get firstRoll(): string {
    return "";
    //if (this.rolls[0] === this.maxPins) {
    //  return "X";
    //} else {
    //  return this.rolls[0]?.toString() || "";
    //}
  }

  get secondRoll(): string {
    return "";
    // if (this.rolls[1] === this.maxPins) {
    //   return "/";
    // } else if (this.maxPins - this.rolls[0] === this.rolls[1]) {
    //   return "/";
    // } else {
    //   return this.rolls[1]?.toString() || "";
    // }
  }

  get resultScore(): string {
    return "";
    //   if (this.result === this.maxPins) {
    //     return "";
    //   }
    //   return this.result.toString();
  }
}
</script>

<style scoped lang="scss">
//$scoreCardBg: #ffe5dc;

.scorecard {
  display: flex;
  flex-wrap: wrap;
  width: 6rem;
  height: 6rem;
  border: 2px solid #000;
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
  }
  .second-score {
    @extend .first-score;
    border: 2px solid #000;
    border-style: none none solid solid;
  }
  .result {
    align-self: flex-end;
    width: 6rem;
    height: 3rem;
  }
  span {
    justify-content: center;
    align-items: center;
  }
}
</style>

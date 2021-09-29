<template>
  <div>
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
    <!-- <div class="final-score-card">
      <div class="container">
        <section class="first"></section>
        <section class="second"></section>
        <section class="third"></section>
      </div>
      <section class="result"></section>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { isLastRound } from "@/helpers/helper";

@Component
export default class ScorecardItem extends Vue {
  @Prop() rolls?: number[];
  @Prop() result?: number;

  maxPins = 10;

  get rollOne(): number {
    return this.rolls[0] || 0;
  }

  get rollTwo(): number {
    return this.rolls[1] || 0;
  }

  get firstRoll(): string {
    if (this.rollOne === this.maxPins) {
      return "X";
    } else {
      return this.rolls[0]?.toString() || "";
    }
  }

  get secondRoll(): string {
    if (this.rollOne === this.maxPins) {
      return "-";
    } else if (this.rollOne + this.rollTwo === this.maxPins) {
      return "/";
    } else {
      return this.rolls[1]?.toString() || "";
    }
  }

  get resultScore(): string {
    if (this.result === this.maxPins) {
      return "";
    }
    return this.result.toString();
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
  border: 1px solid #575a5e;
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
    border: 1px solid #575a5e;
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
// .final-score-card {
//   display: flex;
//   flex-wrap: wrap;
//   width: 9rem;
//   height: 6rem;
//   border: 1px solid #575a5e;
//   border-radius: 4px;
//   background: #f6bd60;
//   margin: 3px;
//   .container {
//     display: flex;
//     flex-direction: row;
//     width: 8.9rem;
//   }
//   .first {
//     width: 3rem;
//     height: 3rem;
//   }
//   .second {
//     @extend .first;
//     border: 1px solid #575a5e;
//     border-style: none none solid solid;
//   }
//   .third {
//     @extend .first;
//     border: 1px solid #575a5e;
//     border-style: none none solid solid; // I think we could rewrite this since we're repeating ourselfs
//     padding-right: 1rem;
//   }
//   .result {
//     align-self: flex-end;
//     width: 9rem;
//     height: 3rem;
//   }
// }
</style>

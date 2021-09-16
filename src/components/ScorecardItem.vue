<template>
  <div class="scorecard">
    <div class="container">
      <div class="first-score">
        {{ firstScore }}
      </div>
      <div class="second-score">{{ secondScore }}</div>
    </div>
    <div class="result" v-if="resultScore > 0 && resultScore < 10">
      {{ resultScore }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ScorecardItem extends Vue {
  @Prop() private shots!: number[]; //item.shots
  @Prop() private result!: number;

  get firstScore(): string {
    if (this.shots[0] === 10) {
      return "X";
    } else {
      return this.shots[0]?.toString() || "";
    }
  }
  get secondScore(): string {
    if (this.shots[1] === 10) {
      return "X";
    } else {
      return this.shots[1]?.toString() || "";
    }
  }
  get resultScore(): number {
    return this.result;
  }
}
</script>

<style scoped lang="scss">
.scorecard {
  display: flex;
  flex-wrap: wrap;
  width: 6rem;
  height: 6rem;
  border: 1px solid #8b8b8b;
  background: #defff2;
  margin: 3px;
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
    border: 1px solid #8b8b8b;
    border-style: none none solid solid;
  }
  .result {
    align-self: flex-end;
    width: 6rem;
    height: 3rem;
  }
}
</style>

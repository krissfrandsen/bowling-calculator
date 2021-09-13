<template>
  <div class="final-score-card">
    <div class="container">
      <section class="first"></section>
      <section class="second"></section>
      <section class="third"></section>
    </div>
    <section class="result"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class FinalScorecardItem extends Vue {
  @Prop() private finalScore!: string;
}
</script>

<style scoped lang="scss">
.final-score-card {
  display: flex;
  flex-wrap: wrap;
  width: 8rem;
  height: 8rem;
  border: 1px solid #8b8b8b;
  .container {
    display: flex;
    flex-direction: row;
    width: 8rem;
  }
  .first {
    width: 4rem;
    height: 4rem;
  }
  .second {
    @extend .first-score;
    border: 1px solid #8b8b8b;
    border-style: none none solid solid;
  }
  .third {
    @extend .first-score;
    border: 1px solid #8b8b8b;
    border-style: none none solid solid;
  }
  .result {
    align-self: flex-end;
    width: 8rem;
    height: 4rem;
  }
}
</style>

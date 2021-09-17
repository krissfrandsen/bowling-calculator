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
  width: 9rem;
  height: 6rem;
  border: 1px solid #b1a8b9;
  background: #ffe5dc;
  margin: 3px;
  .container {
    display: flex;
    flex-direction: row;
    width: 8.9rem;
  }
  .first {
    width: 3rem;
    height: 3rem;
  }
  .second {
    @extend .first;
    border: 1px solid #b1a8b9;
    border-style: none none solid solid;
  }
  .third {
    @extend .second;
    padding-right: 1rem;
  }
  .result {
    align-self: flex-end;
    width: 9rem;
    height: 3rem;
  }
}
</style>

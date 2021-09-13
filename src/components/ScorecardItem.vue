<template>
  <div class="scorecard">
    <section class="first-score"></section>
    <section class="second-score"></section>
    <section class="result"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ScorecardItem extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.scorecard {
  display: flex;
  flex-wrap: wrap;
  width: 8rem;
  height: 8rem;
  border: 1px solid #8b8b8b;
  .container {
    display: flex;
    flex-direction: row;
    width: 8rem;
    height: 8rem;
    border: 1px solid #ff2a6d;
  }
  .first-score {
    width: 4rem;
    height: 4rem;
    border: 1px solid #ff2a6d;
  }
  .second-score {
    @extend .first-score;
  }
  .result {
    border: 1px solid white;
  }
}
</style>

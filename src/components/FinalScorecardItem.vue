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
  border: 1px solid #8b8b8b;
  background: #defff2;
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
    border: 1px solid #8b8b8b;
    border-style: none none solid solid;
  }
  .third {
    @extend .first;
    border: 1px solid #8b8b8b;
    border-style: none none solid solid; // I think we could rewrite this since we're repeating ourselfs
    padding-right: 1rem;
  }
  .result {
    align-self: flex-end;
    width: 9rem;
    height: 3rem;
  }
}
</style>

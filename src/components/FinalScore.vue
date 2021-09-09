<template>
  <div class="final-score-card-item">
  <section class="first-score"></section>
  <section class="second-score"></section>
  <section class="third-third"></section>
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
.scorecard {
   
    width: 8rem;
    height: 8rem;
    border: 1px solid black;
}
.first-score {
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid white;
 }
</style>

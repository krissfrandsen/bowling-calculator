<template>
  <div class="scorecard">
    <div class="container">
      <div class="first-score"></div>
      <div class="second-score"></div>
    </div>
    <div class="result"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ScorecardItem extends Vue {
  // @Prop() private msg!: string;
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
}
.first-score {
  width: 4rem;
  height: 4rem;
  
  }
   .second-score {
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

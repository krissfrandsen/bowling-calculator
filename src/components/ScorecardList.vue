<template>
  <div class="add-player-wrapper">
    <ScorecardItem v-for="n in 9" :key="n" />
    <FinalScorecardItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScorecardItem from "./ScorecardItem.vue";
import FinalScorecardItem from "./FinalScorecardItem.vue";

@Component({
  components: {
    ScorecardItem,
    FinalScorecardItem,
  },
})
export default class ScorecardList extends Vue {}
</script>

<style scoped lang="scss">
.add-player-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  // background-color: lightsalmon;
}
</style>

<template>
  <div class="add-player-wrapper">
      <h1>Scoreboard</h1>
      <ScorecardItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScorecardItem from "./ScorecardItem.vue"; 

@Component({
    components: {
        ScorecardItem
    }
})
export default class ScorecardList extends Vue {

}
</script>

<style scoped lang="scss">
.add-player-wrapper {
    height: 12.5rem;
    background-color: lightsalmon;
}

</style>

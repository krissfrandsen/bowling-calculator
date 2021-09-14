<template>
  <div class="add-player-wrapper">
    <ScorecardItem
      v-for="(item, index) in game"
      :key="index"
      :shots="item.shots"
    />
    <FinalScorecardItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ScorecardItem from "./ScorecardItem.vue";
import FinalScorecardItem from "./FinalScorecardItem.vue";

@Component({
  components: {
    ScorecardItem,
    FinalScorecardItem,
  },
})
export default class ScorecardList extends Vue {
  @Prop() private game!: any[];
}
</script>

<style scoped lang="scss">
.add-player-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>

<template>
  <div class="add-player-wrapper">
    <ScorecardItem v-for="i in numberOfBaseFrames" :key="i"></ScorecardItem>
    <!--<ScorecardItem
      v-for="(item, index) in frames"
      :key="index"
      :rolls="item.rolls"
      :result="item.score"
    />-->
    <FinalScorecardItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
import ScorecardItem from "./ScorecardItem.vue";
import FinalScorecardItem from "./FinalScorecardItem.vue";
import { IFrame } from "@/types/frame";

@Component({
  components: {
    ScorecardItem,
    FinalScorecardItem,
  },
})
export default class ScorecardList extends Vue {
  @Prop() frames!: IFrame[];
  @Prop() numberOfFrames!: number;

  addFrames() {
    for (let i = 0; i < 9; i++) {
      this.$store.dispatch("addFrames", i);
    }
  }

  get numberOfBaseFrames(): number {
    return this.numberOfFrames - 1 > 0 ? this.numberOfFrames - 1 : 1;
  }

  updated() {
    this.addFrames();
  }
}
</script>

<style scoped lang="scss">
.add-player-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>

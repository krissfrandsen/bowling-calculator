<template>
  <div class="pin-wrapper">
    <BaseButton
      v-for="item in pins"
      :key="item"
      :text="item"
      @click="btnClick(item)"
      background="#7c7484"
      color="#ffe5dc"
    />
    <!-- @click hanterar emitten som emittas uppe från basebutton componenten -->
    <BaseButton text="Reset" background="#8F8BA7" color="#ffe5dc" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class Pins extends Vue {
  @Prop() private pins!: number[];
  @Prop() private gameList!: any[];
  @Prop() isDisabled!: () => void;

  btnClick(number: any) {
    this.$emit("number", number);
  }

  disableHandler(number: number) {
    this.$emit("isDisabled", number);
  }
  resetScorecard() {
    this.$emit("reset-scorecard");
  }
}
</script>

<style scoped lang="scss">
.pin-wrapper {
  height: 4rem;
  padding-bottom: 2rem;
}
</style>

<template>
  <div class="pin-wrapper">
    <BaseButton
      v-for="item in pins"
      :key="item"
      :text="item"
      :class="{ disabled: pinIsDisabled(item) }"
      @click="btnClick(item)"
      background="#F5CAC3"
      color="#000"
    />
    <BaseButton
      text="Reset"
      background="#E0909C"
      color="#ffe5dc"
      @click="reset"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";
import { Action } from "vuex-class";

@Component({
  components: {
    BaseButton,
  },
})
export default class Pins extends Vue {
  @Prop() pins!: number[];
  @Prop() currentFrameRolls!: number[];
  @Prop() isDisabled!: () => void;
  @Action("reset") reset: any;

  pinIsDisabled(index: number): boolean {
    if (10 - index < this.currentFrameRolls[0]) {
      return true;
    }
  }

  btnClick(number: number) {
    if (this.pinIsDisabled(number)) {
      return;
    }
    this.$emit("number", number);
  }
}
</script>

<style scoped lang="scss">
.pin-wrapper {
  width: 91%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  .disabled {
    filter: grayscale(22);
    border: none;
  }
}
</style>

<template>
  <button
    type="button"
    class="base-button"
    @click="handleClick"
    :style="{ background, color }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop() text!: string;
  @Prop() background!: string;
  @Prop() color!: string;

  handleClick() {
    this.$emit("click");
  }
}
</script>

<style scoped lang="scss">
.base-button {
  //background-color: #84a59d;
  text-align: center;
  // color: #464f51;
  font-size: 1rem;
  padding: 1rem 1.4rem;
  border: 1px solid #9a9a95;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
  &:disabled {
    background-color: lightgray;
  }
}
</style>

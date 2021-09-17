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
  @Prop() private text!: string;
  @Prop() private background!: string;
  @Prop() private color!: string;

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
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    filter: brightness(125%);
  }
}
</style>

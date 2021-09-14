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
  background-color: #d68fd6;
  text-align: center;
  color: #464f51;
  font-size: 1rem;
  padding: 1rem 1.7rem;
  // border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    filter: brightness(125%);
  }
}
</style>

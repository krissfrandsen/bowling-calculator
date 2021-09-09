<template>
  <div class="pin-wrapper">
      <BaseButton text="0" />
      <BaseButton text="1" />
      <BaseButton text="2" />
      <BaseButton text="3" />
      <BaseButton text="4" />
      <BaseButton text="5" />
      <BaseButton text="6" />
      <BaseButton text="7" />
      <BaseButton text="8" />
      <BaseButton text="9" />
      <BaseButton text="10" />
      <BaseButton text="Reset" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue"; 

@Component({
  components: {
    BaseButton
  },
})
export default class Pins extends Vue {
//   @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.pin-wrapper {
    height: 4rem;
    // background-color: lightsteelblue;
}

</style>

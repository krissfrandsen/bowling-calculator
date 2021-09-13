<template>
  <div class="add-player-wrapper">
    <h1>Bowling Score Calculator</h1>
    <BaseButton background="#549F93" text="Add Player" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class AddPlayer extends Vue {
  //   @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.add-player-wrapper {
  width: 75rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

h1 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 5rem;
  padding-bottom: 2rem;
  color: #0ff4c6;
}
</style>

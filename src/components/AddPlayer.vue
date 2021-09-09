<template>
  <div class="add-player-wrapper">
      <h1>Bowling Score Calculator</h1>
      <BaseButton text="Add Player"/>
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
export default class AddPlayer extends Vue {
  //   @Prop() private msg!: string;
}

</script>

<style scoped lang="scss">
.add-player-wrapper {
    margin-top: 70px;
    height: 6.25rem;
    width: 75rem;
}

</style>

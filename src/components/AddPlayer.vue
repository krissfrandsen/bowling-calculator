<template>
  <div class="add-player-wrapper">
    <BaseButton
      background="#84A59D"
      color="#ffe5dc"
      text="Add Player"
      @click="addPlayer"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { createLogger } from "vuex";
import BaseButton from "./BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class AddPlayer extends Vue {}
</script>

<style scoped lang="scss">
.add-player-wrapper {
  width: 75rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
</style>

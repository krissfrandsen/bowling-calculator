<template>
  <div class="add-player-wrapper">
    <h1>Bowling Score Calculator</h1>

    <BaseButton
      background="#8F8BA7"
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
export default class AddPlayer extends Vue {
  addPlayer() {
    const newPlayer = [
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
      {
        score: 0,
        rolls: [],
      },
    ];
    this.$emit("add-player", newPlayer);
  }
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
  color: #7c7484;
}
</style>

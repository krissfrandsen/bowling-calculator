<template>
  <div>
    <AddPlayer />
    <Scoreboard v-for="(player, i) in playerList" :key="i" :player="player" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { IGame } from "@/types/game";
import AddPlayer from "@/components/AddPlayer.vue";
import Scoreboard from "@/components/Scoreboard.vue";
@Component({
  components: {
    AddPlayer,
    Scoreboard,
  },
})
export default class Game extends Vue {
  @State("playerList")
  playerList: IGame;
}
</script>

<style scoped lang="scss"></style>

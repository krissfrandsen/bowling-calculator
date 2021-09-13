<template>
  <div id="app">
    <div class="hero">
      <AddPlayer />
      <Scoreboard />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AddPlayer from "@/components/AddPlayer.vue";
import Scoreboard from "@/components/Scoreboard.vue";

@Component({
  components: {
    AddPlayer,
    Scoreboard,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("./assets/bg4.jpg");
  background-size: cover;
}

h1 {
  color: #d1f7ff;
}

.hero {
  width: 100%;
  height: 85vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  margin: auto;
}
</style>

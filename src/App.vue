<template>
  <div id="app">
    <div class="hero">
      <h1>Bowling Score Calculator</h1>
      <Game />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Game from "@/components/Game.vue";

@Component({
  components: {
    Game,
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
  background-image: url("./assets/bg2.jpeg");
  background-size: cover;
}

.hero {
  width: 100%;
  height: 85vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  margin: auto;
  border-radius: 10px;
}

h1 {
  font-family: "Chakra Petch", sans-serif;
  font-size: 5rem;
  padding-bottom: 2rem;
  color: #7c7484;
}
</style>

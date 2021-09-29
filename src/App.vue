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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("./assets/background.jpeg");
  background-size: cover;
}

.hero {
  width: 100%;
  height: 80vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  margin: auto;
  border-radius: 10px;
  z-index: 2;
}

h1 {
  font-family: "Righteous", cursive;
  font-size: 5rem;
  padding-bottom: 2rem;
  color: #f28482;
}
</style>

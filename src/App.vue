<template>
  <div id="app">
    <svg class="blob1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#84A59D"
        d="M58.1,-51.8C65.9,-36.6,56.4,-12.9,49.2,8.4C42.1,29.8,37.4,48.8,23.4,59.8C9.5,70.8,-13.7,73.7,-34.3,65.9C-54.9,58,-72.9,39.4,-75,20C-77,0.7,-63.3,-19.4,-48.1,-36.3C-33,-53.3,-16.5,-67.1,4.3,-70.5C25.2,-74,50.3,-67.1,58.1,-51.8Z"
        transform="translate(80 70)"
      />
    </svg>
    <svg class="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F28482"
        d="M64,-17.3C73.3,7.8,64.5,42.2,44.3,55.6C24.2,68.9,-7.3,61.2,-29.7,44.2C-52,27.2,-65.2,0.9,-58.7,-20.3C-52.2,-41.5,-26.1,-57.5,0.6,-57.7C27.4,-57.9,54.7,-42.3,64,-17.3Z"
        transform="translate(90 80)"
      />
    </svg>
    <svg class="blob3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F5CAC3"
        d="M59.9,-19.4C67.4,3.7,56.2,32.8,33.6,50.3C10.9,67.7,-23.2,73.4,-43.3,58.9C-63.3,44.5,-69.3,10.1,-59.7,-15.9C-50.1,-41.8,-25.1,-59.1,0.6,-59.3C26.2,-59.5,52.4,-42.5,59.9,-19.4Z"
        transform="translate(120 150)"
      />
    </svg>
    <svg class="blob4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F28482"
        d="M65.6,-35.8C76.1,-19.6,69.7,8.4,55.9,28.3C42.1,48.1,21.1,59.7,-1.4,60.5C-23.8,61.3,-47.7,51.3,-53.8,35.9C-59.8,20.5,-48.2,-0.3,-36.3,-17.3C-24.4,-34.2,-12.2,-47.4,7.7,-51.8C27.5,-56.2,55.1,-51.9,65.6,-35.8Z"
        transform="translate(60 120)"
      />
    </svg>
    <svg class="blob5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#84A59D"
        d="M67.9,-23.4C74.1,-2.9,55.7,24.2,30.8,42.3C6,60.3,-25.4,69.2,-42.4,57.2C-59.4,45.1,-62.1,12,-52.6,-12.9C-43.1,-37.8,-21.6,-54.6,4.6,-56.1C30.8,-57.6,61.7,-43.8,67.9,-23.4Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg class="blob6" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F5CAC3"
        d="M41.8,-10.7C48.9,8.2,45.7,33.4,28.7,47.6C11.7,61.9,-19.1,65.2,-34.9,52.7C-50.6,40.1,-51.4,11.6,-43.1,-9.1C-34.8,-29.7,-17.4,-42.5,0,-42.5C17.3,-42.4,34.7,-29.7,41.8,-10.7Z"
        transform="translate(100 40)"
      />
    </svg>
    <div class="hero">
      <h1>Bowling Score Calculator</h1>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f7ede2;
}

.hero {
  width: 100%;
  height: 85vh;
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

svg {
  height: 80%;
  width: 80%;
  position: absolute;
}

.blob1 {
  width: 20rem;
  height: 15rem;
  margin: 0;
  top: 0;
  left: 0;
}
.blob2 {
  width: 25rem;
  height: 20rem;
  top: 0;
  right: 0;
}
.blob3 {
  width: 20rem;
  height: 25rem;
  bottom: 0;
  right: 0;
}
.blob4 {
  width: 20rem;
  height: 20rem;
  bottom: 0;
}
.blob5 {
  width: 15rem;
  height: 20rem;
}
.blob6 {
  width: 20rem;
  height: 20rem;
  left: 0;
  bottom: 0;
}
</style>

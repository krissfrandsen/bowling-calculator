<template>
  <div id="app" >
    <div class="container">
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
    AddPlayer, Scoreboard
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
  width: 100%;;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-image: url('./assets/background.jpeg');
  background-size: cover;
//   background: rgb(0,48,98);
// background: linear-gradient(90deg, rgba(0,48,98,1) 30%, rgba(0,86,120,1) 60%, rgba(5,217,232,1) 100%);
}

h1 {
  color: #d1f7ff;
}

.container {
  // background-color: rgba(0, 0, 0, 0.5);
  width: 90%;
  height: 85vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  margin: auto;
  border-radius: 25px;

}
</style>

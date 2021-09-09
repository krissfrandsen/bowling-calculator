<template>
  <div id="app" >
    <AddPlayer />
    <Scoreboard />
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #003062;
}

h1 {
  color: #d1f7ff;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 4.5rem;
}
</style>

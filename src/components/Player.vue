<template>
  <div class="player">
      <h3>{{name}}</h3>
      <BaseButton text="Edit Name" />
      <BaseButton text="Delete" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from "vue-property-decorator";
import BaseButton from "./BaseButton.vue"; 

@Component({
  components: {
 BaseButton
  },
})
export default class Player extends Vue {
  @Prop() private name!: string;
}
</script>

<style scoped lang="scss">
.player {
    height: 9.375rem;
    // background-color: lightseagreen;
}
h3 {
  color: #ff2a6d;
}

</style>

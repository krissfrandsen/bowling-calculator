<template>
  <div class="player">
    <h2>{{ name }}</h2>
    <BaseButton background="#E2C2FF" text="Edit Name" />
    <BaseButton background="#E2B1B1" text="Delete" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class Player extends Vue {
  @Prop() private name!: string;
}
</script>

<style scoped lang="scss">
.player {
  margin-bottom: 2rem;
}
h2 {
  color: #defff2;
  padding-bottom: 1rem;
}
</style>

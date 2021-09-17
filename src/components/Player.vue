<template>
  <div class="player">
    <h2>{{ name }}</h2>

    <BaseButton background="#8F8BA7" color="#ffe5dc" text="Edit Name" />
    <BaseButton background="#E0909C" color="#ffe5dc" text="Delete" />
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
  color: #7c7484;
  padding-bottom: 1rem;
}
</style>

<template>
  <div class="pin-wrapper">
    <BaseButton v-for="(n, i) in 11" :key="n" :text="i" />
    <BaseButton background="#258EA6" text="Reset" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class Pins extends Vue {
  //   @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.pin-wrapper {
  height: 4rem;
  padding-bottom: 2rem;
}

button {
  background-color: #ca3cff;
}
</style>

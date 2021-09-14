<template>
  <div class="pin-wrapper">

    <BaseButton
      v-for="item in pins"
      :key="item"
      :text="item"
      @click="btnClick(item)"
    />
    <!-- @click hanterar emitten som emittas uppe från basebutton componenten -->
    <BaseButton text="Reset"  background="#258EA6"/>
    {{ usedPins }}

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
export default class Pins extends Vue {
  @Prop() private pins!: number[]; //tar emot data som skickas upp
  @Prop() private usedPins!: number[]; //tar emot data som skickas upp

  btnClick(number: any) {
    this.$emit("number", number); //skickar vidare data ner i heirarkin
  }
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

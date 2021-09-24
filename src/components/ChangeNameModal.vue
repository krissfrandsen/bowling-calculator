<template>
  <div class="overlay">
    <div class="modal">
      <slot></slot>
      <input type="text" v-model="newName" placeholder="change name" />
      <div class="btn-wrapper">
        <BaseButton
          @click="changeName(newName)"
          background="#84A59D"
          color="#ffe5dc"
          text="Confirm"
        ></BaseButton>
        <BaseButton
          background="#84A59D"
          color="#ffe5dc"
          text="Cancel"
          @click="close"
        ></BaseButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";

@Component({
  components: {
    BaseButton,
  },
})
export default class ChangeNameModal extends Vue {
  changeName(name: string) {
    this.$emit("edit", name);
  }

  close() {
    this.$emit("toggleBtn");
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    width: 300px;
    height: 200px;
    padding: 20px;
    background-color: #f7ede2;
    box-shadow: 1px 2px 4px rgba(153, 155, 168, 0.12);
    input {
      padding: 15px;
      width: 100%;
      border: 0;
      box-sizing: border-box;
      margin: 20px 0;
    }
    .btn-wrapper {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>

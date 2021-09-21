<template>
  <div>
    <input type="text" v-model="newName" />
    <button @click="changeName(newName)">OK!</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class ChangeNameModal extends Vue {
  newName = "";

  changeName(name: string) {
    console.log("from changenameModal", name);

    this.$emit("editName", name);
  }
}
</script>

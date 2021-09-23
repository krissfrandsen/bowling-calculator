<template>
  <div>
    <div>
      <input type="text" v-model="newName" placeholder="change name" />
      <button @click="changeName(newName)">OK!</button>
    </div>
    <div>
      <input type="text" placeholder="add name" v-model="newName" />
      <button @click="addName(newName)">OK!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class ChangeNameModal extends Vue {
  newName = "";

  changeName(name: string) {
    this.$emit("edit", name);
    this.newName = "";
  }

  addName(name: string) {
    this.$emit("add", name);
    this.newName = "";
  }
}
</script>

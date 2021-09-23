<template>
  <div class="player">
    <h2>{{ getName }}</h2>
    <div v-for="(name, index) in this.$store.state.nameList" :key="index">
      <p>{{ name }}</p>
    </div>

    <BaseButton
      background="#8F8BA7"
      color="#ffe5dc"
      text="Edit Name"
      @click="toggleModal"
    />
    <BaseButton background="#E0909C" color="#ffe5dc" text="Delete" />

    <ChangeNameModal v-show="changeNameModal" @edit="editName" @add="addName" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseButton from "./BaseButton.vue";
import { mapActions, mapGetters } from "vuex";
import ChangeNameModal from "./ChangeNameModal.vue";

@Component({
  components: {
    BaseButton,
    ChangeNameModal,
  },
  computed: {
    ...mapGetters(["getName"]),
  },
})
export default class Player extends Vue {
  changeNameModal = false;

  editName(newName: string) {
    this.$store.dispatch("changeName", newName);
  }

  addName(name: string) {
    console.log(this.$store.state.nameList);
    this.$store.dispatch("addName", name);
  }

  toggleModal() {
    this.changeNameModal = !this.changeNameModal;
  }
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

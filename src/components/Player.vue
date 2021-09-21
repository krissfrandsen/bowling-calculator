<template>
  <div class="player">
    <h2>{{ name }}</h2>
    <p>{{ getName }}</p>

    <BaseButton
      background="#8F8BA7"
      color="#ffe5dc"
      text="Edit Name"
      @click="toggleModal"
    />
    <BaseButton background="#E0909C" color="#ffe5dc" text="Delete" />

    <ChangeNameModal v-show="changeNameModal" @changeName="editName(newName)" />
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
  @Prop() private name!: string;

  changeNameModal = false;

  editName(newName: string) {
    console.log("name parameter from player component", newName);
    console.log("store name from player", this.$store.state.player.name);
    this.$store.dispatch("changeName", newName);
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

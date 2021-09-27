<template>
  <div class="player">
    <h2>Player: {{ getName }}</h2>
    <!-- <div v-for="(name, index) in this.$store.state.nameList" :key="index">
      <p>{{ name }}</p>
    </div> -->
    <div class="button-wrapper">
      <BaseButton
        background="#F5CAC3"
        color="#000"
        text="Edit Name"
        @click="toggleModal"
      />
      <BaseButton background="#E0909C" color="#ffe5dc" text="Delete" />
    </div>
    <ChangeNameModal
      v-show="isVisibility"
      @edit="editName"
      @toggleBtn="toggleModal"
    ></ChangeNameModal>
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
  isVisibility = false;

  editName(newName: string) {
    this.$store.dispatch("changeName", newName);
    this.toggleModal();
  }

  toggleModal() {
    this.isVisibility = !this.isVisibility;
  }
}
</script>

<style scoped lang="scss">
.player {
  margin-bottom: 2rem;
  width: 90%;
  margin: auto;
  h2 {
    color: #575a5e;
    padding-bottom: 1rem;
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
}
</style>

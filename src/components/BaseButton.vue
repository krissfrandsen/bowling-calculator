<template>
  <button type="button" class="base-button">{{text}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BaseButton extends Vue {
  @Prop() private text!: string;
}
</script>

<style scoped lang="scss">
.base-button {
background-color: #05d9e8;
text-align: center;
color: #005678;
font-size: 1rem;
padding: 1rem 1rem;
}
</style>

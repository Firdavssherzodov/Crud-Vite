<template>
  <div>
    <input :type="show" class="border" />
    <button class="border mx-3" @click="showParword">ko'rsat</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let show = ref("password");

function showParword() {
  show.value = show.value == "password" ? "text" : "password";
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h1 class="text-fuchsia-500 px-96">wsalom</h1>

    <div class="border py-20 bg-red-700"></div>
    <input
      type="text "
      class="border h-12 w-10/12"
      v-model="input"
      :class="[input.length == 12 ? 'border-red-600' : 'border']"
      :disabled="atr"
    />
    <br />
    <span v-for="(item, index) of input" :class="{ uppercase: index % 2 == 0 }">
      {{ item.split("").reverse().join("") }}</span
    >
  </div>

  <h1>{{ input.split("").reverse().join("") }}</h1>
</template>

<script setup>
import { ref, computed } from "vue";

let input = ref("");

let atr = ref(false);
</script>

<style lang="scss" scoped></style>

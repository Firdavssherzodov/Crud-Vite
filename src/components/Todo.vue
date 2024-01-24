<template>
  <div>
    <section class="">
      <input type="text" v-model="input" />
      <button @keydown="key">submit</button>

      <ul>
        <li v-for="item of gloas">{{ item }}</li>
      </ul>
    </section>
  </div>

  <h1 class="text-red-600">salom</h1>
</template>

<script setup>
import { ref } from "vue";

let gloas = ref(["Test"]);
let input = ref("");

let Todo = () => {
  if (input.value != "") {
    gloas.value.push(input.value);
    input.value = "";
  } else {
    alert("Please enter");
  }
};

function key(e) {
  if (
    (e.keyCode == 70 &&
      e.keyCode == 73 &&
      e.keyCode == 82 &&
      e.keyCode == 68 &&
      e.keyCode == 65 &&
      e.keyCode == 86 &&
      e.keyCode == 83) ||
    e.keyCode == 27
  )
    console.log(e);




  Todo();
}

// 77 69 78 32 83 69 78 73 32 83 69 86 65 77 65 78
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: auto;
  padding: 5px;
}
input {
  height: 30px;
  width: 80%;
}

button {
  width: 100px;
  padding: 5px;
  margin-left: 10px;
}
</style>

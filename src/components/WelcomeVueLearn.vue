<template>
  <div v-for="item of user">
    <div v-if="!item.name">
      {{ item.name }}
    </div>
  </div>

  <h1>{{ hello.split("").reverse().join("") }}</h1>

  <div>
    <!-- <div v-bind="user"></div> -->
    <h1>salom hozir</h1>
    <h1 v-text="msg"></h1>
  </div>

  <p ref="p">hello</p>

  <h1>{{ firdavs.split("").reverse().join("") }}</h1>
  <h1 v-if="ok">salom</h1>
  <h1 v-else>yuq salom</h1>

  <!-- <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Have awesome</h1>
  <h1 v-else-if="!awesome">Oh no 😢</h1> -->

  <!-- <ul v-if="!ok">
    <li>salom1</li>
    <li>salom2</li>
    <li>salom3</li>
  </ul>
  <p v-else-if="ok > 7">yuq salom1</p>
  <p v-else-if="ok < 7">yuq salom2</p>
  <p v-else-if="ok == 7">yuq salom3</p> -->

  <h1 :class="[ok > 6 ? 'text' : 'text2']">salom</h1>



</template>

<script setup>
let hello = "Hello world";

let firdavs = "firdavs";

import { ref } from "vue";

let ok = ref(2);

let p = ref();

let user = [
  {
    name: "muhammadjon",
    age: 19,
  },
  {
    name: "firdavs",
    age: 18,
  },
];

let msg = "salom nima gaplar";
let data = ref(Date.now());
</script>

<style scoped>
.text {
  color: red;
}
.text2 {
  color: rgb(0, 17, 255);
}
</style>

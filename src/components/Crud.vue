<template>
  <Toast position="top-center" />
  <div class="diva w-full h-full md:flex">
    <div
      class="absolute md:top-0 top-1 py-2 bg-red-500 md:w-2/5 w-full text-white text-center"
      v-if="show"
    >
      {{ handle }}
    </div>
    <div class="FirstSection md:border md:w-2/5 sm:w-[75%] h-full">
      <!-- input 1 -->

      <span class="p-float-label md:mx-16 ml-14 md:mt-10 mt-12">
        <InputText
          id="Name"
          v-model="Name"
          class="border w-full p-2"
          placeholder="Name"
          :class="{ 'border-red-600 shadow-xl': show2 }"
          @onfocus="ShowInput()"
        />
      </span>
      <!-- input 2 -->
      <span class="p-float-label my-8 md:mx-16 ml-14">
        <InputText
          v-model="email"
          class="border w-full p-2"
          placeholder="Email"
          :class="{ 'border-red-600 shadow-xl': show2 }"
          
          @onfocus="ShowInput()"
        />
      </span>
      <!-- input 3 -->
      <span class="p-float-label md:mx-16 ml-14 mb-10">
        <InputText
          id="job"
          v-model="job"
          class="border w-full p-2"
          placeholder="Job"
          :class="{ 'border-red-600 shadow-xl': show2 }"
          @onfocus="ShowInput()"
        />
      </span>
      <Button
        label="Send"
        class="p-1.5 mb-7 border w-10/12 mx-16 font-sans"
        @click="Send"
      />
    </div>
    <!-- SecondSection -->
    <div
      class="SecondSection md:w-3/5 w-full md:border overflow-auto h-[21.1rem]"
    >
      <table border="border-2" class="w-full border">
        <tr class="sticky top-0 z-10 bg-white">
          <th>N0</th>
          <th>Name</th>
          <th>Eamail</th>
          <th>Job</th>
          <th>dawload</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        <tr v-for="(item, index) of data" :key="item" class="border">
          <td class="font-semibold">{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.job }}</td>
          <td>
            <a href="././../../cow.jpg" download=""
              ><button
                class="border p-1 rounded-lg"
                :class="{ hidden: !item.url }"
              >
                dowload
              </button></a
            >
          </td>
          <td>
            <Button
              icon="pi pi-upload text-blue-400 p-2"
              severity="info"
              aria-label="User"
              v-on:click="Update(item.id)"
            />
          </td>
          <td>
            <Button
              icon="pi pi-times text-red-600 p-2"
              severity="danger"
              aria-label="Cancel"
              v-on:click="Delete(index)"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { ref } from "vue";

import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const toast = useToast();
let Name = ref("");
let email = ref("");
let job = ref("");
let handle = "";
let show = ref(false);
let show2 = ref(false);
let id = ref(null);

const showError = () => {
  toast.add({
    severity: "error",
    summary: "Delete",
    detail: "User data",
    life: 1000,
  });
};
const data = ref([
  {
    id: 1,
    name: "Firdavs",
    email: "firdavs@gmail.com",
    job: "Frontend development",
    isButton: false,
  },
  {
    id: 2,
    name: "Hamonjon",
    email: "Hamonjon@gmail.com",
    job: "Hamonjon Jobs MCHJ",
    url: "https://wallpaperset.com/w/full/9/a/8/199702.jpg",
    isButton: true,
  },
  {
    id: 3,
    name: "Shomirza",
    email: "Shomirza@gmail.com",
    job: "Shomirza YTT",
    isButton: false,
  },
  {
    id: 4,
    name: "Eshmat",
    email: "Eshmat@gmail.com",
    job: "Eshmat PHP",
    isButton: false,
  },
  {
    id: 5,
    name: "Jamshid",
    email: "Jamshid@gmail.com",
    job: "Jamshid Mobile",
    isButton: false,
  },
  {
    id: 6,
    name: "O'tkir",
    email: "O'tkir@gmail.com",
    job: "O'tkir C++",
    isButton: false,
  },
  {
    id: 7,
    name: "Bunyod",
    email: "Bunyod@gmail.com",
    job: "Bunyod C++",
    isButton: false,
  },
]);
function Delete(index) {
  showError();
  data.value.splice(index, 1);
  if (data.value.length == 0) {
    (Name.value = ""), (email.value = ""), (job.value = "");
  }
}
function Send() {
  for (let item of data.value) {
    if (item.id == id.value) {
      if (id.value != null) {
        let userFind = data.value.find((user) => user.id == id.value);
        userFind.name = Name.value;
        userFind.email = email.value;
        userFind.job = job.value;
        (handle = ""), (Name.value = ""), (email.value = ""), (job.value = "");
        id.value = null;
      }
    }
  }
  if (Name.value === "" && email.value === "" && job.value === "") {
    show2.value = true;
    show.value = true;
    handle = `Iltimos maydoni to'ldiring`;
    setTimeout(() => {
      show.value = false;
    }, 3000);
    return;
  } else {
  show2.value = false;

    let message = {
      id: data.value.length + 1,
      name: Name.value,
      email: email.value,
      job: job.value,
    };
    data.value.push(message);
    show.value = false;
    show2.value = false;

    (handle = ""), (Name.value = ""), (email.value = ""), (job.value = "");
  }
}
function Update(idw) {
  let userFind = data.value.find((user) => user.id == idw);
  Name.value = userFind.name;
  email.value = userFind.email;
  job.value = userFind.job;
  id.value = idw;
}

function ShowInput() {
}
</script>

<style lang="scss" scoped>
table th,
td {
  padding: 8px;
}
td {
  text-align: center;
}

:deep InputText:focus diva {
  margin-top: 5vh;
}
</style>

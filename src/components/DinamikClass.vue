<template>
  <div class="diva">
    <div
      class="box"
      v-for="(book, index) in books"
      :class="{ 'bg- text-white font-sans': !book.isfav }"
    >
      <img
        :src="book.image"
        alt=""
        :class="[index % 2 == 0 ? 'mt-52' : 'm-auto']"
      />
      <p>{{ book.books }}</p>
    </div>
  </div>
</template>

<script setup>
const books = [
  {
    books: "omar xalil",
    image:
      "https://barakot.uz/image/get-image?imageName=Jur%27at%20(%D0%905,%20yumshoq)%20144%20bet.jpg",
    isfav: false,
  },
  {
    books: "omar xalil",
    image:
      "https://barakot.uz/image/get-image?imageName=Jur%27at%20(%D0%905,%20yumshoq)%20144%20bet.jpg",
    isfav: true,
  },
  {
    books: "omar xalil",
    image:
      "https://barakot.uz/image/get-image?imageName=Jur%27at%20(%D0%905,%20yumshoq)%20144%20bet.jpg",
    isfav: false,
  },
  {
    books: "omar xalil",
    image:
      "https://barakot.uz/image/get-image?imageName=Jur%27at%20(%D0%905,%20yumshoq)%20144%20bet.jpg",
    isfav: false,
  },
  {
    books: "omar xalil",
    image:
      "https://barakot.uz/image/get-image?imageName=Jur%27at%20(%D0%905,%20yumshoq)%20144%20bet.jpg",
    isfav: true,
  },
  {
    books: "omar xalil",
    image:
      "https://barakot.uz/image/get-image?imageName=Jur%27at%20(%D0%905,%20yumshoq)%20144%20bet.jpg",
    isfav: false,
  },
];
</script>

<style lang="scss" scoped>
.diva {
  width: 100%;
  display: flex;
}
.box {
  width: 300px;
  margin: 10px;
}
img {
  width: 100%;
  height: 200px;
}
</style>

<template>
  <img :src="imgUrl" alt="Pokemon" class="w-[400px] h-[400px] object-contain" />
</template>

<script>
import { findNextItem } from "@/helpers/nextElementInArray";
export default {
  name: "HeroImage",
  data() {
    return {
      imgName: "squirtle-transparent.png",
      imgUrl: "",
      interval: null,
    };
  },
  created() {
    this.changeImage();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeImage() {
      this.interval = setInterval(() => {
        const imgNames = [
          "pikachu-transparent.png",
          "bulbasaur-transparent.png",
          "squirtle-transparent.png",
          "charizard-transparent.png",
        ];
        this.imgName = findNextItem(imgNames, this.imgName);
        this.imgUrl = require(`@/assets/img/${this.imgName}`);
      }, 3000);
    },
  },
};
</script>

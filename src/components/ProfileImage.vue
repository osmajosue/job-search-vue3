<template>
  <img
    :src="imgUrl"
    alt=""
    class="w-9 h-9 object-contain rounded-3xl cursor-pointer"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imgUrl:
        "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>

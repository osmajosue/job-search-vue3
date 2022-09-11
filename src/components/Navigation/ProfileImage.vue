<template>
  <img
    :src="imgUrl"
    class="w-9 h-9 object-contain rounded-3xl cursor-pointer hover:shadow-gray"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imgUrl: "https://www.freeiconspng.com/uploads/pikachu-png-icon-8.png",
    };
  },
};
</script>

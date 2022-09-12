<template>
  <img
    :src="imgUrl"
    class="w-10 h-10 object-contain rounded-3xl cursor-pointer hover:shadow-gray bg-orange-100"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imgUrl: require(`@/assets/img/treecko-transparent.png`),
    };
  },
};
</script>

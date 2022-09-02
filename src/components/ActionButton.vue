<template>
  <button
    class="bg-brand-blue-1 px-4 py-2.5 text-white text-xs font-semibold rounded border-0 hover:shadow-blue"
    @click="clickHandler"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      default: "Sign in",
      required: true,
    },
  },
};
</script>

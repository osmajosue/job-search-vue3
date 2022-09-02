<template>
  <button class="primary" @click="clickHandler">
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

<style scoped>
button {
  @apply px-4 py-2.5 text-xs font-semibold rounded;
}

.primary {
  @apply bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
}
</style>

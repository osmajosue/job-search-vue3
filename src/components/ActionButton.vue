<template>
  <button :class="buttonClass">
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
    type: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClass() {
      return {
        primary: this.type === "primary",
        secondary: this.type === "secondary",
      };
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
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>

<template>
  <section class="mb-[60px]">
    <h1
      class="text-8xl font-bold tracking-tighter mb-14"
      data-test="action-verb"
    >
      <span :class="verbClass">{{ verb }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-normal tracking-tighter">
      Find your next Job at Diaz Careers.
    </h2>
  </section>
</template>

<script>
import { findNextItem } from "@/helpers/nextElementInArray.js";

export default {
  name: "Headline",
  data() {
    return {
      verb: "Build",
      interval: null,
    };
  },
  computed: {
    verbClass() {
      return {
        [this.verb]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const verbs = ["Build", "Create", "Code", "Design"];
        this.verb = findNextItem(verbs, this.verb);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.Build {
  color: #1a73e8;
}

.Create {
  color: #34a853;
}

.Code {
  color: #d93025;
}

.Design {
  color: #f9ab00;
}

.isActive {
}
</style>

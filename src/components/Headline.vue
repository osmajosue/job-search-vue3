<template>
  <h1>
    <span :class="verbClass">{{ verb }}</span> <br />
    for everyone
  </h1>
  <h2>Find your next Job at Diaz Careers</h2>
</template>

<script>
export default {
  name: "Headline",
  data() {
    return {
      verb: "Code",
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
        const verbs = ["Build", "Code", "Design", "Create"];
        const currentVerbIndex = verbs.indexOf(this.verb);
        const nextVerbIndex = (currentVerbIndex + 1) % 4;
        const nextVerb = verbs[nextVerbIndex];
        this.verb = nextVerb;
      }, 5000);
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
</style>

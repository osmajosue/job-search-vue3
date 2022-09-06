<template>
  <h1>{{ verb }} for everyone</h1>
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

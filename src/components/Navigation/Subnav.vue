<template>
  <div
    class="w-full h-16 bg-white border-b border-solid border-brand-gray-1 px-8"
  >
    <div class="flex h-full justify-between">
      <div
        v-if="onJobResultsPage"
        data-test="job-count"
        class="flex h-full items-center"
      >
        <font-awesome-icon :icon="['fas', 'search']" class="h-4 mr-2.5" />

        <div class="inline">
          <span>
            <span class="text-brand-green-1">2860</span>
            jobs matched
          </span>
        </div>
      </div>

      <nav class="h-full">
        <ul class="h-full flex justify-end items-center">
          <li class="mr-9 text-brand-gray-4 hover:text-black">
            <a href="#">Saved Jobs</a>
          </li>
          <li class="text-brand-gray-4 hover:text-black">
            <a href="#">Job Alerts</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  // data() {
  //   return {
  //     onJobResultsPage: true,
  //   };
  // },
  props: {
    onJobResultsPage: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

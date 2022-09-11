<template>
  <form
    action=""
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="h-4 mr-3 ml-[18px]" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10 font-medium">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Software Engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-x border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex flex-1 flex-nowrap h-full pl-3">
        <label for="" class="absolute left-3 -top-10 font-medium">Where?</label>
        <input
          v-model="location"
          type="text"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <action-button
      text="Search"
      type="secondary"
      class="rounded-l rounded-3xl"
    />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  // methods: {
  //   updateRole($event) {
  //     this.role = $event.target.value;
  //   },
  //     updateLocation($event) {
  //     this.location = $event.target.value;
  //   },
  // },
};
</script>

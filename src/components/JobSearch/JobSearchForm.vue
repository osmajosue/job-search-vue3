<template>
  <form
    action=""
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="h-4 mr-3 ml-[18px]" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="" class="absolute left-0 -top-10 font-medium">Role</label>
        <text-input v-model="role" placeholder="Software Engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border-x border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex flex-1 flex-nowrap h-full pl-3">
        <label for="" class="absolute left-3 -top-10 font-medium">Where?</label>
        <text-input v-model="location" placeholder="San Francisco" />
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
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(payload) {
      this.role = payload;
    },
    updateLocation(payload) {
      this.location = payload;
    },
  },
};
</script>

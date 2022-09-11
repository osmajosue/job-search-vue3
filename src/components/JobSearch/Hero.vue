<template>
  <main>
    <section class="flex flex-col h-screen pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>

        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>

        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <hero-image />
        </div>

        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import HeroImage from "@/components/JobSearch/HeroImage.vue";

export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    HeroImage,
  },
  data() {
    return {};
  },
};
</script>

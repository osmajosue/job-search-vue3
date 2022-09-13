import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobResultsView from "@/views/JobResultsView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs/results",
      name: "JobResults",
      component: JobResultsView,
    },
  ],
});

export default router;

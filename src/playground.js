const developer = {
  name: "Osmani Diaz",
  salary: 50000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  isLookingForWork: true,
  seniority() {
    if (this.experience < 1) {
      console.log("Experience Level is Junior");
    } else {
      console.log("Experience Level is Senior");
    }
  },
};

console.log(developer);
developer.seniority();

import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { navbar } from "./src/data/navbar";
import { skills } from "./src/data/skills";
import { experience } from "./src/data/experience";
import { projects } from "./src/data/projects";

export default defineConfig({
  plugins: [
    handlebars({
      context: {
        navbar,
        skills,
        experience,
        projects,
      },
    }),
  ],
});

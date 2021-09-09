<template>
  <div class="row repos m-negative-row">
    <RepoItem
      v-for="repo in repos"
      :key="repo.id"
      :url="repo.html_url"
      :name="repo.name"
      :description="repo.description"
      :color="technologyColors[(repo.language).split(' ')[0]]"
      :language="repo.language"
      :stargazers-count="repo.stargazers_count"
      :forks="repo.forks"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
import RepoItem from "./RepoItem.vue";

export default {
  name: "ReposList",
  components: {
    RepoItem,
  },
  props: {
    repos: {
      type: Array,
      required: true,
    },
  },
  setup() {
    // Properties
    // ------------------------------
    const technologyColors = reactive({
      CSS: "--blue-color",
      HTML: "--red-color",
      JavaScript: "--yellow-color",
      TypeScript: "--violet-color",
      Vue: "--green-color",
      Vim: "--green-color"
    });

    // Return
    // ------------------------------
    return {
      technologyColors,
    };
  },
};
</script>

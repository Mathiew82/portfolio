<template>
  <div class="row repos m-negative-row">
    <RepoItem
      v-for="repo in repos"
      :key="repo.id"
      :url="repo.html_url"
      :name="repo.name"
      :description="repo.description"
      :color="technologyColors[repo.language.split(' ')[0]]"
      :language="repo.language"
      :stargazers-count="repo.stargazers_count"
      :forks="repo.forks"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import RepoItem from './RepoItem.vue';

interface TechnologyColors {
  CSS: string;
  HTML: string;
  JavaScript: string;
  TypeScript: string;
  Vue: string;
  Vim: string;
  Rust: string;
  Python: string;
  Lua: string;
}

const technologyColors: TechnologyColors = {
  CSS: '--blue-color',
  HTML: '--red-color',
  JavaScript: '--yellow-color',
  TypeScript: '--violet-color',
  Vue: '--green-color',
  Vim: '--green-color',
  Rust: '--brown-color',
  Python: '--green-color',
  Lua: '--violet-color'
};

const repos = ref<any[]>(null);

const fetchRepos = async (): Promise<any[]> => {
  const response = await fetch(
    `https://api.github.com/users/Mathiew82/repos?sort=updated&direction=desc`
  );
  const reposResponse = await response.json();
  return reposResponse.splice(0, 10);
};

onBeforeMount(async (): Promise<void> => {
  const response = await fetchRepos();
  repos.value = response.filter(
    (item) => item.name !== 'Mathiew82' && !item.fork
  );
});
</script>

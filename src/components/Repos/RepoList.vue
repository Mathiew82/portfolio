<template>
  <div v-if="repos.length" class="row repos m-negative-row">
    <RepoItem
      v-for="repo in repos"
      :key="repo.id"
      :url="repo.html_url"
      :name="repo.name"
      :description="repo.description"
      :color="technologyColors[repo.language?.split(' ')[0]]"
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
  Shell: string;
}

const technologyColors: TechnologyColors = {
  CSS: '--blue-color',
  HTML: '--red-color',
  JavaScript: '--yellow-color',
  TypeScript: '--blue-color',
  Vue: '--green-color',
  Vim: '--green-color',
  Rust: '--brown-color',
  Python: '--green-color',
  Lua: '--violet-color',
  Shell: '--green-color'
};

const repos = ref<any[]>([]);

const dateDiff = (first: number, second: number): number => {
  return Math.round((second - first) / (1000 * 60 * 60));
};

const fetchRepos = async (): Promise<void> => {
  const path = 'https://api.github.com/users/';
  const options = '?sort=updated&direction=desc';

  const response = await fetch(`${path}Mathiew82/repos${options}`);
  const reposResponse = await response.json();
  console.log(reposResponse);

  repos.value = reposResponse
    .filter((item) => item.name !== 'Mathiew82' && !item.fork)
    .splice(0, 9);
};

const setGithubItems = (): void => {
  localStorage.setItem('github-cached', Date.now().toString());
  localStorage.setItem('github-response', JSON.stringify(repos.value));
  return;
};

const requestCache = async (): Promise<void> => {
  if (!localStorage.getItem('github-cached')) {
    await fetchRepos();
    setGithubItems();
  }

  const dateDiffHours = dateDiff(
    Number(localStorage.getItem('github-cached')),
    Date.now()
  );

  if (dateDiffHours > 23) {
    localStorage.removeItem('github-cached');
    await fetchRepos();
    setGithubItems();
  }

  repos.value = JSON.parse(localStorage.getItem('github-response'));
};

onBeforeMount(() => {
  requestCache();
});
</script>

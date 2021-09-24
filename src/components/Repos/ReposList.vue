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

<script>
import { ref, onBeforeMount } from 'vue'
import RepoItem from './RepoItem.vue'

export default {
  name: 'ReposList',
  components: {
    RepoItem,
  },
  setup() {
    const repos = ref(null)
    const technologyColors = ref({
      CSS: '--blue-color',
      HTML: '--red-color',
      JavaScript: '--yellow-color',
      TypeScript: '--violet-color',
      Vue: '--green-color',
      Vim: '--green-color',
      Rust: '--brown-color',
    })

    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/Mathiew82/repos?sort=updated&direction=desc`
      )
      const repos = await response.json()
      return repos.splice(0, 10)
    }

    onBeforeMount(async () => {
      const response = await fetchRepos()
      repos.value = response.filter(
        (item) => item.name !== 'Mathiew82' && !item.fork
      )
    })

    return {
      repos,
      technologyColors,
    }
  },
}
</script>

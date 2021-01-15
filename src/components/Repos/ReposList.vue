<template>
  <div class="row repos m-negative-row">
    <repo-item
      v-for="repo in repos"
      :key="repo.id"
      :url="repo.html_url"
      :name="repo.name"
      :description="repo.description"
      :color="technologyColors[repo.language]"
      :language="repo.language"
      :stargazers-count="repo.stargazers_count"
      :forks="repo.forks" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import RepoItem from './RepoItem.vue'

export default {
  name: 'ReposList',
  components: {
    RepoItem
  },
  props: {
    repos: {
      type: Array,
      required: true
    }
  },
  setup () {
    // Properties
    // ------------------------------
    const technologyColors = reactive({
      CSS: '--violet-color',
      HTML: '--red-color',
      JavaScript: '--yellow-color',
      Vue: '--green-color'
    })

    // Return
    // ------------------------------
    return {
      technologyColors
    }
  }
}
</script>

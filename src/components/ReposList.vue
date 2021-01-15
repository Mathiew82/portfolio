<template>
  <div class="row repos m-negative-row">
    <div
      v-for="repo in repos"
      :key="repo.id"
      class="col xs-12 sm-6 md-4 lg-4">
      <div class="repos__item">
        <a
          :href="repo.html_url"
          target="_blank"
          class="repos-title">
          <i class="icon icon-folder-open-empty" /> {{ repo.name }}
        </a>
        <div class="repos-description">{{ repo.description }}</div>
        <div class="repos-language">
          <span
            class="repos-language__circle"
            :style="`background: var(${technologyColors[repo.language]})`"></span>
            {{ repo.language }}
          <a
            :href="`${repo.html_url}/stargazers`"
            target="_blank">
            <i class="icon icon-star-empty" />{{ repo.stargazers_count }}
          </a>
          <a
            v-if="repo.forks"
            class="ml4"
            :href="`${repo.html_url}/network/members`"
            target="_blank">
            <i class="icon icon-fork" />{{ repo.forks }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'ReposList',
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

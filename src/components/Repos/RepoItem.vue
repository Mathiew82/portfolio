<template>
  <div class="col xs-12 sm-6 md-4 lg-4">
    <div class="repos__item">
      <a :href="url" target="_blank" class="repos-title">
        <i class="icon icon-folder-open-empty" /> {{ name }}
      </a>
      <div class="repos-description">{{ description }}</div>
      <div class="repos-language">
        <span
          class="repos-language__circle"
          :style="`background: var(${color})`"
        ></span>
        {{ language }}
        <a :href="`${url}/stargazers`" target="_blank">
          <i class="icon icon-star-empty" />{{ stargazersCount }}
        </a>
        <a
          v-if="forks"
          class="ml4"
          :href="`${url}/network/members`"
          target="_blank"
        >
          <i class="icon icon-fork" />{{ forks }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoItem',
  props: {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    color: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    stargazersCount: {
      type: Number,
      required: true,
    },
    forks: {
      required: false,
    },
  },
}
</script>

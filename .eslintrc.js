module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}

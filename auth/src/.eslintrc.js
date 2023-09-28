module.exports = {
  extends: [
    'plugin:import/typescript',
    'airbnb-base'],
  env: {
    es6: true,
    browser: true
  },
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['warn'],
    'no-console': 'off'
  }
};

module.exports = {
  extends: [
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'react'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    "react/display-name": [0]
  }
};

module.exports = {
  extends: [
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
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

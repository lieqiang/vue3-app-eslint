module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
  },
  "rules": {
    "strict": 0,
    "no-console": 0,
    "global-require": 0,
    "jsx-a11y/href-no-hash": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 0,
    "react/no-unused-prop-types": 0,
    "arrow-body-style": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    'max-len': ["error", 120],
    'linebreak-style': ['off', 'windows'],
    'generator-star-spacing': 'off',
    'semi': 0
  },
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "DEBUG": true,
    "APP_CONFIG": true,
    "agreement": true,
    "DZ_CONFIG": false,
    "REM_SCALE": false,
  }
};

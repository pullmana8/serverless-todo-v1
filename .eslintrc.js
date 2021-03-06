module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint'
    ],
    "rules": {
      "@typescript-eslint/explicit-function-return-type": "off"
    },
    "overrides": [
      {
        "files": ["*.ts", "*.tsx"],
        "rules": {
          "@typescript-eslint/explicit-function-return-type": ["error"]
        }
      }
    ]
  };
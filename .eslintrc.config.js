const react = require('eslint-plugin-react');
const eslint_import = require('eslint-plugin-import');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
      eslint_import,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "import/no-default-export": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": [
        "error"
      ],
      "object-shorthand": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "args": "none",
          "ignoreRestSiblings": true
        }
      ],
      "react/display-name": "error",
      "react/no-children-prop": "error",
      "react/no-danger-with-children": "error",
      "react/no-deprecated": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-find-dom-node": "error",
      "react/no-is-mounted": "error",
      "react/no-render-return-value": "error",
      "react/no-string-refs": "error",
      "react/no-unescaped-entities": "error",
      "react/no-unknown-property": "error",
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "error",
      "react/require-render-return": "error",
      "react/jsx-key": "error",
      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error"
     },
    // ... others are omitted for brevity
    settings: {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true
        }
      }
    },
  }
];
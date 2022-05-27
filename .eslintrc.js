module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: 'airbnb',
  globals: {
    debugPage: true,
    document: true,
    fetch: true,
    mount: true,
    page: true,
    render: true,
    resetPage: true,
    serverAddress: true,
    shallow: true,
    unmount: true,
    window: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks',
    'sort-destructure-keys',
  ],
  rules: {
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    complexity: ['error', 20],
    'consistent-return': 0,

    'import/no-extraneous-dependencies': ['error', { devDependencies: ['stories/**'] }],
    'import/prefer-default-export': 0,

    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'linebreak-style': 0,
    'max-len': ['error', { code: 100, tabWidth: 2 }],
    'max-lines': ['error', { max: 1000, skipComments: true }],
    'max-statements': ['error', 40, { ignoreTopLevelFunctions: true }],
    'no-case-declarations': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-continue': 0,
    'no-else-return': ['error', { allowElseIf: true }],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    // disabled for now until babel-eslint fixes https://github.com/babel/babel-eslint/pull/785
    'no-useless-rename': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'operator-assignment': 0,

    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-newline': [2, {
      multiline: 'forbid',
      singleline: 'forbid',
    }],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2, { checkAttributes: false, indentLogicalExpressions: true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': ['error', {
      ignoreCase: true,
      reservedFirst: true,
    }],
    'react/jsx-uses-react': 'off',
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',

    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys': ['error', 'asc', { natural: true }],
    'vars-on-top': 0,
  },
};

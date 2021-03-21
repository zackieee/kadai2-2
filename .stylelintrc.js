module.exports = {
  extends: ['stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': [
      true, 
      {
        'singleQuote': true,
        'useTabs': true,
        'semi': true,
        'trailingComma': true
      }
    ],
  }
};
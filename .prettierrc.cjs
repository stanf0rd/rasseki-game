module.exports = {
  arrowParens: 'avoid',
  printWidth: 80,
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: ['*.ts'],
      options: {
        tabWidth: 4,
      },
    },
  ],
};

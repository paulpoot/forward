module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80, // puts props on their own line to improve readability
  tabWidth: 2,
  importOrder: [
    // Place react import at the top
    '^react$',
    // External dependencies
    '^\\w',
    // This project's own aliases
    '^(@api|@assets|@blocks|@components|@atoms|@molecules|@organisms|@templates|@contexts|@hooks|@libs|@mocks|@pages|@styles|@typings|@utils)(/.*|$)',
    // Every import starting with ./ or ~/
    '^[./|~/]',
  ],
  importOrderSeparation: true,
};

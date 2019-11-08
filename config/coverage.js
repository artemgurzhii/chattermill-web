module.exports = {
  useBabelInstrumenter: true,
  excludes: [
    '*/concat-stats-for/**/*',
    '*/public/**/*',
    '*/translations/**/*',
    '*/vendor/**/*',
    '**/*-test*',
  ],
  reporters: ['html', 'lcov'],
  coverageFolder: 'coverage',
};

export default {
  preset: 'ts-jest',
  verbose: true,
  detectOpenHandles: true,
  forceExit: true,
  logHeapUsage: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!node_modules/**',
    '!dist/**',
    '!__test__/**'
  ]
}

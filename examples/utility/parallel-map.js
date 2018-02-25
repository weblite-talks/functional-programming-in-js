const Parallel = require('paralleljs')

module.exports = (func, arr) =>
  new Parallel(arr, { maxWorkers: 8 }).map(func)

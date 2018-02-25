const Parallel = require('paralleljs')

module.exports = (func, arr) => new Parallel(arr).map(func)

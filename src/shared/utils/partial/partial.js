/**
 * @function partial
 * @param {*} func
 * @param  {*} args
 * @returns {*}
 */

export const partial = (func, ...args) =>
  func.bind(null, ...args);

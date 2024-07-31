/**
 * Return the sum of scores in the object
 *
 * @param {*} obj
 * @returns {*} number
 */
const getScore = (obj) => Object.entries(obj).reduce((acc, [, value]) => acc + value, 0);


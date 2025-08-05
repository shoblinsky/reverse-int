module.exports = function reverse(n) {
  let initString = n.toString
  let result = '';
  let i = 0;
  while (i < initString.length) {
    result = `${result}${initString[i]}`
    i += 1
  }
  return result
};

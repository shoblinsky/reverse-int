module.exports = function reverse(n) {
  const nAbs = Math.abs(n);
  const initString = nAbs.toString();
  let result = '';
  for (let i = 0; i < initString.length; i += 1) {
    result = `${initString[i]}${result}`;
  }
  return result;
};

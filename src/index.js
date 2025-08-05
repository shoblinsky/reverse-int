module.exports = function reverse(n) {
  const initString = n.toString();
  let result = '';
  for (let i = 0; i < initString.length; i += i) {
    result = `${initString[i]}${result}`;
  }
  return result;
};

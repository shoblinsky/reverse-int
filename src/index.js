module.exports = function reverse(n) {
  let initString = n.toString()
  let result = '';

  for (let i = 0; i < initString.length; i++) {
    result = `${initString[i]}${result}`
  }
  return Number(result)
};

reverse(120)

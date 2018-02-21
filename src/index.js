module.exports = function check(str, bracketsConfig) {
  let splited = str.split('');
  let brackets = bracketsConfig.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  let stack = [];
  const opening = brackets.filter((e, i) => !(i % 2));
  for (let i = 0; i < splited.length; i++) {
    if (brackets.includes(splited[i])) {
      if (opening.includes(splited[i])) {
        stack.push(splited[i]);
      } else {
        let last = stack.pop();
        if (brackets.indexOf(splited[i]) - 1 === last) {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

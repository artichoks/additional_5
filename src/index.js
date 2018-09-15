module.exports = function check(str, bracketsConfig) {
  const brackets = str.split('');
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    lastStackValue = stack[stack.length - 1];
    if (isOpening(brackets[i], bracketsConfig) && !isTheSame(lastStackValue, brackets[i], bracketsConfig)) {
      stack.push(brackets[i]);
    } else {
      if (stack.length === 0 || (stack.pop() !== getMatchingOpening(brackets[i], bracketsConfig))) { return false; }
    }
  }
  return stack.length === 0;
}

function getMatchingOpening(closing, bracketsConfig) {
  return bracketsConfig.find(brackets => closing === brackets[1])[0];
}

function isOpening(currentValue, bracketsConfig) {
  return bracketsConfig.find(brackets => currentValue === brackets[0]);
}

function isTheSame(lastStackValue, currentValue, bracketsConfig) {
  return bracketsConfig.find(brackets => lastStackValue === brackets[0] && currentValue === brackets[1]);
}
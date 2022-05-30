import lookup from './lookup';
import parseArray from './parseArray';

/**
 * @desc 让tokens数组变成字符串
 * @param {[]} tokens
 * @param {[]} data
 */
export default function renderTemplate(tokens, data) {
  console.log('renderTemplate', tokens, data);
  let resultStr = '';

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    // console.log('token', token);
    if (token[0] === 'name') {
      resultStr += lookup(data, token[1]);
    } else if (token[0] === '#') {
      resultStr += parseArray(token, data);
    } else {
      resultStr += token[1];
    }
  }
  return resultStr;
}

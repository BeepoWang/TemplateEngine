import lookup from './lookup';
import renderTemplate from './renderTemplate';

/**
 *
 * @param {[]} token
 * @param {{}} data
 */

export default function parseArray(token, data) {
  let resultStr = '';

  let value = lookup(data, token[1]);

  for (let i = 0; i < value.length; i++) {
    resultStr += renderTemplate(token[2], {
      ...value[i],
      '.': value[i]
    });
  }

  return resultStr;
}

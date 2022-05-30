/**
 * @desc: 在对象中寻找连续点符号的keyName属性
 * @param {object} obj
 * @param {string} keyName
 */
export default function lookup(obj, keyName) {
  if (keyName.indexOf('.') !== -1 && keyName !== '.') {
    let keys = keyName.split('.');
    // 设置临时变量，指向obj
    let temp = obj;
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  } else {
    return obj[keyName];
  }
}

/**
 * @description 折叠tokens，将#和/之间的tokens整合起来
 * @param {[]} tokens
 */
export default function nestTokens(tokens) {
  // 结果数组
  var nestTokens = [];
  // 收集器，天生指向nesTokens结果数组，引用类型值，所以指向同一个数组
  // 收集器的指向会变化,当遇见#时，收集器就会指向这个token下标为2的新数组
  var collector = nestTokens;
  // 栈结构，存放小tokens,栈顶的头tokens数组中当前操作的这个tokens小数组
  var sections = [];

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch (token[0]) {
      case '#':
        // 收集器中放入token
        collector.push(token);
        // 入栈
        sections.push(token);
        // 改变收集器指向，收集器指向这个token下标为2的新数组
        collector = token[2] = [];
        break;
      case '/':
        // 出栈，pop会返回刚刚弹出的项
        sections.pop();
        // 改变收集器的指针为栈结构队尾那项的下标为2的数组，如果不存在指向上一级
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
        break;
      default:
        collector.push(token);
    }
  }

  return nestTokens;
}

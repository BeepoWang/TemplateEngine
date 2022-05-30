import Scanner from './scanner';
/**
 * 将模板字符串变成tokens数组
 */
export default function parseTemplateToTokens(templateStr) {
  let str;
  let tokens = [];

  // 创建一个扫描器
  let scanner = new Scanner(templateStr);
  // 让扫描器工作
  while (!scanner.eos()) {
    // 收集开始标记出现之前的文字
    str = scanner.scanUtil('{{');
    if (str) {
      // 存入tokens
      tokens.push(['text', str]);
    }
    // 跳过{{
    scanner.scan('{{');
    // 收集标记内部的文字
    str = scanner.scanUtil('}}');
    if (str) {
      // 判断str是否是 # 开头
      if (str[0] === '#') {
        // 存入tokens
        tokens.push(['#', str.substring(1)]);
      } else if (str[0] === '/') {
        // 存入tokens
        tokens.push(['/', str.substring(1)]);
      } else {
        // 存入token
        tokens.push(['name', str]);
      }
    }
    // 跳过}}
    scanner.scan('}}');
  }
  // 返回token数组
  return tokens;
}

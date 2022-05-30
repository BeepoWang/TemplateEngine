import Scanner from './scanner';

window.Bepo_TemplateEngine = {
  // 渲染方法
  render(templateStr, data) {
    console.log('rendering template', templateStr, data);
    let str;
    // 实例化一个扫描器，提供一个模板字符串参数
    const scanner = new Scanner(templateStr);

    while (!scanner.eos() && scanner.pos !== templateStr.length) {
      str = scanner.scanUtil('{{');
      console.log('str==>', str);
      console.log('pos==>', scanner.pos);
      scanner.scan('{{');

      str = scanner.scanUtil('}}');
      console.log('str==>', str);
      console.log('pos==>', scanner.pos);
      scanner.scan('}}');
    }
  }
};

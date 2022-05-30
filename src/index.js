import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';

window.Bepo_TemplateEngine = {
  // 渲染方法
  render(templateStr, data) {
    // 将模板字符串转换成tokens数组
    let tokens = parseTemplateToTokens(templateStr);
    // 调用renderTemplate，让tokens数组变成字符串
    let str = renderTemplate(tokens, data);

    return str;
  }
};

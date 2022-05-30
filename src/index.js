
import parseTemplateToTokens from './parseTemplateToTokens';

window.Bepo_TemplateEngine = {
  // 渲染方法
  render(templateStr, data) {
    console.log('rendering template', templateStr, data);
    let tokens = parseTemplateToTokens(templateStr);
    console.log('parsed tokens', tokens);
  }
};

/**
 * 扫描器类
 */

export default class Scanner {
  constructor(templateStr) {
    // 初始化模板字符串
    this.templateStr = templateStr;
    // 指针
    this.pos = 0;
    // 尾巴，一开始就是模板字符串
    this.tail = templateStr;
  }

  // 走过指定内容
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      //移动指针跳过tag，tag有多长，就移动多少
      this.pos += tag.length;
      // 更新尾巴
      this.tail = this.templateStr.substring(this.pos);
    }
  }

  // 让指针进行扫描,直到遇到指定内容，并返会结束之前路过的文字
  scanUtil(stopTag) {
    // 记录开始时的指针位置
    const startPos = this.pos;
    // 循环移动指针，当尾巴的开头不是stopTag时,说明还没有扫描到stopTag
    while (!this.eos() && this.tail.indexOf(stopTag) !== 0) {
      // 指针移动
      this.pos++;
      // 更新尾巴
      this.tail = this.templateStr.substring(this.pos);
    }
    return this.templateStr.substring(startPos, this.pos);
  }

  // 判断是否已经扫描到尾巴
  eos() {
    return this.pos >= this.templateStr.length;
  }
}

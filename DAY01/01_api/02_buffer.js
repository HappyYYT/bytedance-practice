// 缓存区
// 应用场景：图片切割、合并 js 处理不了
// 视频压缩 调个底层硬件 POS 动态链接库

// 申请了10个字节的内存
const buf1 = Buffer.alloc(10);

// 2个0代表一个字节，一个字节有8位，
// 16进制有：0123456789abcdef
// 1111 代表f
// 一个16进制有4位，所以2个16进制=8位，代表一个字节
// 它把内存的情况反映给你 
console.log(buf1);// <Buffer 00 00 00 00 00 00 00 00 00 00>

// 打印的是16进制的a的ASCII码
const buf2 = Buffer.from('a')
console.log(buf2);// <Buffer 61>

const buf3 = Buffer.from('中');
// 它打印的是uft-8
console.log(buf3);// <Buffer e4 b8 ad>

const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4, buf4.toString());// <Buffer 61 e4 b8 ad> a中




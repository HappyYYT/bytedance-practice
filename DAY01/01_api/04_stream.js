// 复制一个图片
const fs = require("fs");
// img.jpg => img_copy.jpg
// 用fs read write就可以，
// 但是这样做的过程中就需要把所有的图片读到内存中去。
// 快不快慢不慢不说啊，你把内存都暂光了
// 那么除了这个还有什么方法？
const rs = fs.createReadStream(__dirname + "/img.jpg");
const ws = fs.createWriteStream(__dirname + "/img_copy.jpg");
rs.pipe(ws);
// 创建了一个读的流，又创建了一个写的流
// 然后把这两个流放在一起

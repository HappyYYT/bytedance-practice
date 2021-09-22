## 字节青训营 > 🚩Day1

### :octocat:Node基础Api

| 主题 | 主要实现 |
| :--: | :--: |
| [fs文件系统](https://github.com/HappyYYT/bytedance-practice/blob/main/DAY01/01_api/01_fs.js) | 同/异步读取文件、promisify |
| [buffer缓冲区](https://github.com/HappyYYT/bytedance-practice/blob/main/DAY01/01_api/02_buffer.js)| 有效的在JS中存储二进制数据 |
| [http服务](https://github.com/HappyYYT/bytedance-practice/blob/main/DAY01/01_api/03_http.js) | node实现http server(静态页面、JSON数据、图片) |
| [stream流](https://github.com/HappyYYT/bytedance-practice/blob/main/DAY01/01_api/04_stream.js) | 复制图片 |

> Stream是一个抽象接口，Node中有很多对象实现了这个接口。例如，对http服务器发起请求的request对象就是一个Stream，还有stdout(标准输出)。

所有的Stream对象都是EventEmitter的实例。常用的事件有：
- data：当有数据可读时触发
- end：没有更多的数据可读时触发。
- error：在接收和写入过程中发生错误时触发。
- finish：所有数据已被写入到底层系统时触发。
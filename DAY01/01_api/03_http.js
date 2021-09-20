const fs = require("fs");
const http = require("http");
// 在浏览器输入网址http://localhost:3000/
// 就能查看打印的Server at 3000
http.createServer((request, response) => {
    // console.log('a request');
    // response.end('Hi Node');

    const {url, method} = request;
    if(url === '/' && method === 'GET') {
        // index.html
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if(err) {
                // 设置可以响应中文
                response.writeHead(500 , {
                    'Content-Type':'text/plain;charset=utf-8'
                })
                // 中文
                response.end('500 服务器挂了');
                return
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    }

    else if(url === '/users' && method ==='GET') {
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify({name : 'tom'}))
    }
    
    else {
        response.statusCode = 400;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('404 没找到');
          
    }

})
.listen(3000, ()=>{
    console.log('Server at 3000');
})

// 直接访问http://localhost:3000/abc，页面显示的是404 没找到
// 如果index.html路径或者文件名写错，页面显示的是500 服务器挂了
// 正常访问就是正常显示html页面的内容
// 访问http://localhost:3000/users会显示{"name":"tom"}



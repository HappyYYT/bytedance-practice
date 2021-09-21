### cd 02_vue-auto-router-cli
### npm init -y
### npm i commander download-git-repo ora handlebars figlet clear chalk open -s
### 在执行前只有02_vue-auto-router-cli文件夹，执行后就多了node_modules、package-lock.json和package.json
### bin和README.md是我自己建的

### 在package.json文件里添加以下内容
#### "bin": {"kkb": "./bin/kkb.js"},

### npm link
##### 执行后控制台输出的结果：
##### C:\Users\10237\AppData\Roaming\npm\kkb -> C:\Users\10237\AppData\Roaming\npm\node_modules\02_vue-auto-router-cli\bin\kkb.js
##### C:\Users\10237\AppData\Roaming\npm\node_modules\02_vue-auto-router-cli -> D:\代码\bytedance-youth\bytedance-practice\DAY01\02_vue-auto-router-cli

### 现在直接在命令行输入kkb就能打印hello cli ...了
#### 这和执行vue很像了


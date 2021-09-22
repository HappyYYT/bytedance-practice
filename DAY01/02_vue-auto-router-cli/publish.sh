#!/usr/bin/env bash
npm config get registry # 检查仓库镜像库
npm config set registry=http://registry.npmjs.org
echo '请进行登录相关操作: '
npm login # 登陆
echo "-----------publishing------------"
npm publish #发布
npm config set registry=https://registry.npm.taobao.org # 设置为淘宝镜像
echo "发布完成"
exit

# sudo chmod +x publish.sh
# 会需要输入密码， 然后再执行./publish
# 需要进行登录相关操作
# Username: 
# Password:
# Email:

# 发布npm 到https://www.npmjs.com/上

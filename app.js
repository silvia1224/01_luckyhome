const http=require("http");//引入http模块
const express=require("express");//引入express模块
const routerLogin=require("./router/user_login.js")

//创建web服务器
let app=express();
let server=http.createServer(app);
//创建监听端口
server.listen(3000);
console.log("服务器启动完成");


app.use('/user_login',routerLogin);



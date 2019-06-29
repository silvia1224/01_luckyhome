//引入express模块
const express=require('express');
//创建web服务器
const server=express();
//创建监听端口
server.listen(8080);
//引入路由器
  //1.引入登陆路由
const user_loginRouter=require('./routes/user_login.js');
  //2.引入注册路由
const user_regRouter=require('./routes/user_reg.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//使用中间件将post请求的数据格式化为对象
server.use( bodyParser.urlencoded({
	extended:false
}));
//托管静态资源到public下
server.use(express.static('public'));
//使用路由器，使用挂载的url：/user_login和/user_reg
server.use('/user_login',user_loginRouter);
server.use('/user_reg',user_regRouter);
//引入mysql模块
const mysql=require('mysql');
//创建连接池
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'luckyhome',
	connectionLimit:20
});
//把创建好的链接池导出
module.exports=pool;
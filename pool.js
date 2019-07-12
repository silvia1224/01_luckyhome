const mysql=require('mysql');//引入mysql模块
//创建连接池
let pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'luckyhome',
	connectionLimit:20
});
console.log("数据库连接池创建完成");
//把创建好的链接池导出
module.exports=pool;
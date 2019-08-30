const express=require("express");
var pool=require("../pool.js");
let router=express.Router();

//get请求登录接口
router.get("/user_login",(req,res)=>{
    //获取请求中的数据
    var $uname=req.query.uname;
    var $upwd=req.query.upwd;
    //验证数据是否正确得到
   if(!$uname){
       res.send("没有获取到用户名");
       return;
   }
   if(!$upwd){
       res.send("没有获取到密码");
       return;
   }
   //使用连接池获取访问数据
   pool.query("SELECT * FROM luckyhome_user WHERE uname=? AND upwd=?",[$uname,$upwd],(err,result)=>{
       //console.log(result);
       if(result.length>0){
           res.send("登陆成功");
       }else{
           res.send("用户名或密码错误");
       }
   });
});
module.exports = router;
const express=require("express");
var pool=require("../pool.js");
let router=express.Router();

//get�����¼�ӿ�
router.get("/user_login",(req,res)=>{
    //��ȡ�����е�����
    var $uname=req.query.uname;
    var $upwd=req.query.upwd;
    //��֤�����Ƿ���ȷ�õ�
   if(!$uname){
       res.send("û�л�ȡ���û���");
       return;
   }
   if(!$upwd){
       res.send("û�л�ȡ������");
       return;
   }
   //ʹ�����ӳػ�ȡ��������
   pool.query("SELECT * FROM luckyhome_user WHERE uname=? AND upwd=?",[$uname,$upwd],(err,result)=>{
       //console.log(result);
       if(result.length>0){
           res.send("��½�ɹ�");
       }else{
           res.send("�û������������");
       }
   });
});
module.exports = router;
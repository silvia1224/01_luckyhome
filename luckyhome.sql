SET NAMES UTF8;
DROP DATABASE IF EXISTS luckyhome;
CREATE DATABASE luckyhome CHARSET=UTF8;
USE luckyhome;

/**用户信息表**/
CREATE TABLE luckyhome_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**插入用户信息**/
INSERT INTO luckyhome_user VALUES(NULL,'silvia','123456','123456789@qq.com',13750849681,NULL,NULL,0),
(NULL,'tom','111111','65448749@qq.com',13650849681,NULL,NULL,1);
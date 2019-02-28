<?php
	//引入数据库连接
	require "conn.php";
	//1.获取前端传入的用户名和密码
	if(isset($_POST['username']) && isset($_POST['password']))
	{
		$user=$_POST['username'];
		$pass=sha1($_POST['password']);
		$result=mysql_query("select * from user where username='$user' and password='$pass'");
		if(mysql_fetch_array($result)){
			echo true;//登陆成功
		}else{
			echo false;//登陆失败
		}
	}
?>
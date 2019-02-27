<?php
	require "conn.php";//引入数据库连接的文件
	
	
	//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了
	if(isset($_POST['username'])){
		$username=$_POST['username'];
		$query="select * from user where username='$username'";
		$result=mysql_query($query);
		if(mysql_fetch_array($result)){//如果有值代表用户名存在。
			echo 'false';//有重复
		}else{
			echo 'true';//没有重复
		}
	}
	

	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	if(isset($_POST['submit'])){
		$tel=$_POST['tel'];
		$user=$_POST['username'];//username：表单的名称
		$pass=sha1($_POST['password']);
		//添加语句
		$query=("insert user values('$tel','$user','$pass',NOW())");
		mysql_query($query);//页面的跳转
		header('location:http://10.31.162.27:8087/lfjk/src/login.html');
	}
?>
<?php
	require "conn.php";//引入数据库连接的文件
	
	
	//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了


	
	
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	if(isset($_POST['submit']) && $_POST['submit']=="登录协议并注册"){
		$tel=$_POST['tel'];
		$user=$_POST['username'];//username：表单的名称
		$pass=md5($_POST['password']);
		//添加语句
		$query=("insert user values('$tel','$user','$pass',NOW())");
		mysql_query($query);//页面的跳转
		header('location:http://10.31.162.27:8087/lfjk/src/login.html');
	}
?>
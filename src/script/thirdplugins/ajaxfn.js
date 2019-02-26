function ajax(option){//option:配置参数。
	//对象转字符串的方法
	function objtostring(obj){
		var arr=[];
		for(var i in obj){
			arr.push(i+'='+obj[i]);
		}
		return arr.join('&');
	}
	
	
	//配置默认的请求类型
	option.type=option.type || 'get';
	
	//判断地址是否为空
	if(!option.url){
		throw new Error('请输入接口地址');
	}
	
	//判断数据的传输
	//判断数据类型是对象还是字符串。如果是对象通过objtostring转字符串.
	if(option.data && typeof option.data==='object' && !Array.isArray(option.data)){//object
		option.data=objtostring(option.data);
	}else{
		option.data=option.data;
	}
	
	
	var xhr=new XMLHttpRequest();
	
	
	//通过请求方式判断传输数据。
	//如果是get方式：通过地址栏? &
	if(option.data && option.type=='get'){
		option.url=option.url+'?'+option.data;
	}
	
	//判断是否异步
	if(option.async==false){
		option.async=false
	}else{
		option.async=true;
	}
	
	xhr.open(option.type,option.url,option.async);
	
	//如果是post方式，设置请求头，将数据发到send里面。
	if(option.data && option.type=='post'){
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(option.data);
	}else{
		xhr.send();
	}
	
	
	//如果是同步，无需添加监听事件。
	if(option.async==false){//同步
		if(xhr.status==200){//接口正确
			option.success && option.success(xhr.responseText);
		}else{//接口不正确。
			option.error && option.error('接口地址有误'+xhr.status);
		}
	}else{//异步
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){//发送解析完成，和服务器进行通信。
				if(xhr.status==200){//接口正确
					option.success && option.success(xhr.responseText);
				}else{//接口不正确。
					option.error && option.error('接口地址有误'+xhr.status);
				}
			}
		}
	}
}
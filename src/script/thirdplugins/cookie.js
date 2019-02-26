function addcookie(key,value,days){
	var d=new Date();
	d.setDate(d.getDate()+days);
	document.cookie=key+'='+encodeURIComponent(value)+';expires='+d;
}

function getcookie(key){
	var cookievalue=decodeURIComponent(document.cookie).split('; ');
	for(var i=0;i<cookievalue.length;i++){
		var arr=cookievalue[i].split('=');
		if(key==arr[0]){
			return arr[1];
		}
	}
}

function delcookie(key){
	addcookie(key,'',-1);
}
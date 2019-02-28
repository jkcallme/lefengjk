(function() {
	//1.楼梯效果

	//2.获取数据

	//懒加载
  

	//二级菜单
	$('.top_left').hover(function() {
		$('.areaSell').css('display', 'block');
	});
	$('.areaSell').on('mouseleave', function() {
		$(this).hide();
	})
	$('.areaSell').find('a').on('mouseover', function() {
		$(this).css('color', '#F52648');
	})
	$('.areaSell').find('a').on('mouseout', function() {
		$(this).css('color', '#666');
	})
	$('#webf0').hover(function() {
		$(this).css({
			"background": "#fff"
		})
		$('.caidan1').show();
	}, function() {
		$('.caidan1').hide();

		$(this).css('background', '#f7f7f7')
	})
	$('#webf1').hover(function() {
		$(this).css('background', '#fff')
		$('.caidan2').show();
	}, function() {
		$('.caidan2').hide();
		$(this).css('background', '#f7f7f7')
	})
	$('#webf2').hover(function() {
		$(this).css('background', '#fff')
		$('.caidan3').show();
	}, function() {
		$('.caidan3').hide();
		$(this).css('background', '#f7f7f7')
	})
//	

})()
$(function(){
	/*邮箱正则*/
	var regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	/*密码正则*/
	var regpwd=/^[a-zA-Z0-9]{6,12}$/;
	var reguser=/[^\D]\w{2,10}$/;
	/*验证邮箱开始*/
	$('.email').on('blur',function(){
			var yzemail=$('.yz-email'),
				icon=$('.icon');
		if ($(this).val()=="") {
			yzemail.html('邮箱不能为空');
			yzemail.css('color','red');
			icon.addClass('fa fa-exclamation-circle');
		}else if (!regEmail.test($(this).val())) {
			yzemail.html('邮箱格式不正确');
			yzemail.css('color','red');
			icon.addClass('fa fa-exclamation-circle');
		}else{
			yzemail.html('ok');
			yzemail.css('color','green');
			icon.removeClass('fa fa-exclamation-circle');
			icon.addClass('fa fa-check-circle');
		}
	})
	/*验证邮箱结束*/

	/*验证密码*/
	$('.pwd').on('blur',function(){
		var yzpwd=$('.yz-pwd'),
			icon=$('.icon2');
		if ($(this).val()=="") {
			yzpwd.html('密码不能为空');
			yzpwd.css('color','red');
			icon.addClass('fa fa-exclamation-circle');
		}else if(!regpwd.test($(this).val())){
			yzpwd.html('密码长度在6-12位之间');
			yzpwd.css('color','red');
			icon.addClass('fa fa-exclamation-circle');
		}else{
			yzpwd.html('ok');
			yzpwd.css('color','green');
			icon.removeClass('fa fa-exclamation-circle');
			icon.addClass('fa fa-check-circle');
		}
	})
	/*验证密码结束*/

	/*用户昵称验证*/
	$('.uesr').on('blur',function(){
		var yzuser=$('.yz-user'),
			icon3=$('.icon3');
		if ($(this).val()=="") {
			yzuser.html('用户名不能为空');
			yzuser.css('color','red');
			icon3.addClass('fa fa-exclamation-circle');
		}else if(!reguser.test($(this).val())){
			yzuser.html('用户不能以数字开头');
			yzuser.css('color','red');
			icon3.addClass('fa fa-exclamation-circle');
		}else{
			yzuser.html('ok');
			yzuser.css('color','green');
			icon3.removeClass('fa fa-exclamation-circle');
			icon3.addClass('fa fa-check-circle');
		}
	})

})
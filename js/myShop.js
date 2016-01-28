
$(document).ready(function() {

	init();

});

$(window).load(function() {


});

function init()
{
	$("#btnLogin").click(function(){
		btnLoginCall();
	});
	
	$("#btnRegister").click(function(){
		btnRegisterCall();
	});
	
	$("#btnPassword").click(function(){
		btnForgotPasswordCall();
	});
}


//Param -- L = to visible loginPanel, R = to visisble Register Panel, P = to visible forgot password panel.
function loginPanelVisiblity(param)
{
	$('#myLoginModal').modal('show');
	if(param=="R")
	{
		$("#forgotPasswordPanel").hide();
		$("#registerPanel").show();
		$("#loginPanel").hide();
	}
	else if(param=="P")
	{
		$("#forgotPasswordPanel").show();
		$("#registerPanel").hide();
		$("#loginPanel").hide();
	}
	else 
	{
		//Default Login Panel
		$("#forgotPasswordPanel").hide();
		$("#registerPanel").hide();
		$("#loginPanel").show();
	}
}

function btnLoginCall()
{
	$('#myLoginModal').modal('hide');
	alert('Call service to data for login user..');
}

function btnRegisterCall()
{
	$('#myLoginModal').modal('hide');
	alert('Call service to data for Register user..');
}

function btnForgotPasswordCall()
{
	$('#myLoginModal').modal('hide');
	alert('Call service to data for Forgot Password user..');
}
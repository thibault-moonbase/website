$(document).ready(function() {

  init();

});

$(window).load(function() {


});

function init() {
  $("#btnLogin").click(function() {
    btnLoginCall();
  });

  $("#btnRegister").click(function() {
    btnRegisterCall();
  });

  $("#btnPassword").click(function() {
    btnForgotPasswordCall();
  });
}


//Param -- L = to visible loginPanel, R = to visisble Register Panel, P = to visible forgot password panel.
function loginPanelVisiblity(param) {
  $('#myLoginModal').modal('show');
  if (param == "R") {
    $("#forgotPasswordPanel").hide();
    $("#registerPanel").show();
    $("#loginPanel").hide();
  } else if (param == "P") {
    $("#forgotPasswordPanel").show();
    $("#registerPanel").hide();
    $("#loginPanel").hide();
  } else {
    //Default Login Panel
    $("#forgotPasswordPanel").hide();
    $("#registerPanel").hide();
    $("#loginPanel").show();
  }
}

function btnLoginCall() {
  $('#myLoginModal').modal('hide');
  var email = $("#txtLoginEmail").val();
  var pass = $("#txtLoginPassword").val();
  // alert('Your email :- ' + email + "   and pass is:-  " + pass);
  // curl -i -H "Content-Type: application/json" -X POST -d '{"username":"nick","password":"123"}' http://localhost:8000/v1/account/
  $.ajax({
    url: 'http://localhost:8000/v1/account/',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify({
      username: email,
      password: pass
    }),
    success: function(data) {
      alert('Data: ' + JSON.stringify(data));
    },
    error: function(request, error) {
      alert("Request: " + JSON.stringify(request));
    }
  });
}

function btnRegisterCall() {
  $('#myLoginModal').modal('hide');
  alert('Call service to data for Register user..');
}

function btnForgotPasswordCall() {
  $('#myLoginModal').modal('hide');
  alert('Call service to data for Forgot Password user..');
}

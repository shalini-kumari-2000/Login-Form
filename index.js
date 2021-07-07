var email = $("#email").val();
var password = $("#password").val();
var btn=$("#Log-In")
$(document).ready(function (e) {
  btn.click(function (e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    if (email === 'text@gmail.com' && password ==='1234') {
      $("#success").removeClass("visually-hidden");
      $("#error").hide();
      $("#success").show();
    }
    else {
      $("#error").removeClass("visually-hidden");
      $("#error").show();
      $("#success").hide();  
      }
    });});
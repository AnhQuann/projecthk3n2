$(document).ready(()=>{
  try {
    login();
  } catch (error) {
    console.log(error);
  }
});

const getData = async ()=>{
  let data_return;
  await $.ajax({
            url: "/api/user/",
            type: "GET",
            success: (data)=>{
               data_return = data;
            }
        });
  return data_return;
}

const login = ()=>{
  $('#login_form').submit(async (event)=>{
    event.preventDefault();
    $("#loading-button").html(`<img src="../../static/images/ajax-loader.gif" alt="">`);
    $("#clear").empty();
    $("#clear").html(`<div class="m-2" id="button_login_div"></div>`);
    $('#html_insert').hide()
    $("#usr").removeClass("border border-danger");
    $("#psw").removeClass("border border-danger");
    DOMusername = document.querySelector('#usr').value
    DOMpassword = document.querySelector('#psw').value
    let login_div = document.querySelector('#button_login_div');
    let html_insert;
    let string_alert;
    let data = await getData();
    if (data.length < 1){
      string_alert = `* Không có dữ liệu`
    }
    let count = 0;
    let _flag = false;
    if (DOMusername === "" ){
      string_alert = `* Tài khoản không được bỏ trống`;
      $("#usr").addClass("border border-danger");
      $("#loading-button").html(`<button id="button_login" form="login_form" class="btn btn-primary button_effect" type="submit" name="button">  Đăng nhập </button>`)
    }
    else if (DOMpassword === ""){
      string_alert = `* Mật khẩu không được bỏ trống`;
      $("#psw").addClass("border border-danger");
      $("#loading-button").html(`<button id="button_login" form="login_form" class="btn btn-primary button_effect" type="submit" name="button">  Đăng nhập </button>`)
    }
    else {
            data.forEach((el,index)=>{
              if (check_validate(DOMusername,DOMpassword,el.username,el.password)){
                _flag = true;
              }
              else{
                count += 1;
              }
            });
          
          if (_flag){
                data_to_login = {
                      "username": DOMusername,
                      "password": DOMpassword
                }
                await $.ajax({
                type : "POST",
                url: '/api/user/',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data_to_login),
                success:()=>{
                  console.log("Login_Success");
                  string_alert = "";
                  window.location = `../`;
                }
              });
          }
          else if(_flag == false && data.length === count){
            console.log("Wrong User!");
            string_alert = `* Tài khoản / Mật khẩu không chính xác`;    
            $("#loading-button").html(`<button id="button_login" form="login_form" class="btn btn-primary button_effect" type="submit" name="button">  Đăng nhập </button>`)
          }
    }
    html_insert = `<p id="html_insert" style="text-align:center;color:red;">${string_alert}</p>`;
    login_div.insertAdjacentHTML('afterBegin',html_insert)
  });
}

const check_validate = (user,pass,user_server,pass_server) => {
  if (user === user_server && pass === pass_server){
    return true;
  }
  else if (user !== user_server || pass !== pass_server){
    return false;
  }
}
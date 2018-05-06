$(document).ready(()=>{
  // PressEnter();
  ClickButton();
});

const check_validate = (user,pass,user_server,pass_server) => {
  if (user === user_server && pass === pass_server){
    return true;
  }
  else if (user !== user_server || pass !== pass_server){
    return false;
  }
}

const ClickButton = () =>{
  let data_return;
  let login_div = document.querySelector('#button_login_div');
  let html_insert;
  let string_alert;
  document.querySelector('#button_login').addEventListener('click',async ()=>{
    $('#html_insert').hide()
    $("#clear").empty();
    $("#clear").html(`<div class="m-2" id="button_login_div"></div>`);
    $("#loading-button").html(`<img src="../../static/images/ajax-loader.gif" alt="">`)
    await $.ajax({
        url: "api/login",
        type: "GET",
        success: (data)=>{
           data_return = data;
        }
    });
      if (data_return.length <= 0){
        string_alert = `* Không có dữ liệu`
        console.log("Error")
      }
      else{
        DOMusername = document.querySelector('#usr')
        DOMpassword = document.querySelector('#psw')
        string_alert = "";
        if (DOMusername.value === "" && DOMpassword.value === ""){
          empty = $("#button_login_div").empty();
          string_alert = `* Không để trống Username và Password`;
        }
        else if (DOMusername.value === ""){
          empty = $("#button_login_div").empty();
          string_alert = `* Không để trống Username`;
        }
        else if (DOMpassword.value === ""){
          empty = $("#button_login_div").empty();
          string_alert = `* Không để trống password`;
        }
        else{
          flag = false;
          data_return.forEach((el,index)=>{
            if (check_validate(DOMusername.value,DOMpassword.value,el.username,el.password)){
              flag = true;
            }
          });

          if (flag){
            data_to_login = {
              "username": DOMusername.value,
              "password": DOMpassword.value
            }
            await $.ajax({
               type : "POST",
               url: 'api/login',
               dataType: 'json',
               contentType: 'application/json',
               data: JSON.stringify(data_to_login),
               success:()=>{
                 console.log("Login_Success");
                 window.location = `../`;
               }
             });
          }
          else {
            string_alert = `* Tài khoản / Mật khẩu không chính xác`;
          }
        };
        html_insert = `<p id="html_insert" style="text-align:center;color:red;">${string_alert}</p>`;
        login_div.insertAdjacentHTML('afterBegin',html_insert)
        $("#loading-button").html(`<button id="button_login" class="btn btn-primary button_effect" type="button" name="button">  Đăng nhập </button>`)
        console.log("Get Data Success!!");
      }
  });
}

const PressEnter = () =>{
  document.querySelector("html").addEventListener('keypress',PressEnt)
}
const PressEnt = async (event) =>{
  if (event.keyCode === 13) {
    $("#loading-button").html(`<img src="../../static/images/ajax-loader.gif" alt="">`)
    $("#clear").empty();
    $("#clear").html(`<div class="m-2" id="button_login_div"></div>`)
    let data_return;
    let login_div = document.querySelector('#button_login_div');
    let html_insert;
    let string_alert;
      $('#html_insert').hide()
      await $.ajax({
          url: "api/login",
          type: "GET",
          success: (data)=>{
             data_return = data;
          }
      });
        if (data_return.length <= 0){
          string_alert = `* Không có dữ liệu`
          console.log("Error")
        }
        else{
          DOMusername = document.querySelector('#usr')
          DOMpassword = document.querySelector('#psw')
          string_alert = "";
          if (DOMusername.value === "" && DOMpassword.value === ""){
            empty = $("#button_login_div").empty();
            string_alert = `* Không để trống Username và Password`;
          }
          else if (DOMusername.value === ""){
            empty = $("#button_login_div").empty();
            string_alert = `* Không để trống Username`;
          }
          else if (DOMpassword.value === ""){
            empty = $("#button_login_div").empty();
            string_alert = `* Không để trống password`;
          }
          else{
            flag = false;
            data_return.forEach((el,index)=>{
              if (check_validate(DOMusername.value,DOMpassword.value,el.username,el.password)){
                flag = true;
              }
            });
  
            if (flag){
              data_to_login = {
                "username": DOMusername.value,
                "password": DOMpassword.value
              }
              await $.ajax({
                 type : "POST",
                 url: 'api/login',
                 dataType: 'json',
                 contentType: 'application/json',
                 data: JSON.stringify(data_to_login),
                 success:()=>{
                   console.log("Login_Success");
                   window.location = `../`;
                 }
               });
            }
            else {
              string_alert = `* Tài khoản / Mật khẩu không chính xác`;
            }
          };
          html_insert = `<p id="html_insert" style="text-align:center;color:red;">${string_alert}</p>`;
          login_div.insertAdjacentHTML('afterBegin',html_insert)
          $("#loading-button").html(`<button id="button_login" class="btn btn-primary button_effect" type="button" name="button">  Đăng nhập </button>`)
          console.log("Get Data Success!!");
      }
  }
}
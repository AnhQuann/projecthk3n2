$(document).ready(()=>{
  ClickButton();
});

const ClickButton = () =>{
  let data_return;
  let login_div = document.querySelector('#button_login_div');
  let html_insert;
  let string_alert;
  document.querySelector('#button_login').addEventListener('click',async ()=>{
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
          data_return.forEach((el,index)=>{
            if (DOMusername.value !== el.username){
              string_alert = `* Tài khoản không chính xác`;
            }
            else if (DOMpassword.value !== el.password){
              string_alert = `* Mất khẩu không chính xác`;
            }
            else{
              data_to_login = {
                "username": DOMusername.value,
                "password": DOMpassword.value
              }
             $.ajax({
                type : "POST",
                url: 'api/login',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data_to_login),
                success:()=>{
                  console.log("Login_Success");
                  window.location = `../`
                }
              });
            }
          })
        }
        html_insert = `<p id="html_insert" style="text-align:center;color:red;">${string_alert}</p>`;
        login_div.insertAdjacentHTML('afterBegin',html_insert)
        console.log("Get Data Success!!");
      }
  });
}

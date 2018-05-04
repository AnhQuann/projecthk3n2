$(document).ready(()=>{
  ClickButton();
});

const ClickButton = () =>{
  let data_return;
  let login_div = document.querySelector('#button_login_div');
  let html_insert;
  let string_alert;
  document.querySelector('#button_login').addEventListener('click',async ()=>{
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
            console.log(el.username);
          })
        }

        html_insert = `<p style="text-align:center;color:red;">${string_alert}</p>`;
        login_div.insertAdjacentHTML('afterBegin',html_insert)
        console.log("haveData");
      }
  });
}

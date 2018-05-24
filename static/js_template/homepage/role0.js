// HTML_______________________________________________
const modal_html_KL = `
<button type="button" class="btn btn-primary mb-2" data-toggle="modal" data-target="#exampleModalLong">
    Thêm mới
  </button>
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Thêm mới Khóa luận</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div >
            <form class="d-flex flex-column" action="">
                <label for="editNameDisser"> Tên Khóa Luận: </label>
                <input id="editNameDisser" name="editNameDisser" type="text" value="">
                <label for="editTopic"> Đề tài: </label>
                <input id="editTopic" name="editTopic" type="text" value="">
              </form>
            </div>
        </div>
        <div class="modal-footer">
          <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
          <button id="add_new_disser" type="button" onclick="add_new_disser()" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>
  <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">`;

const modal_html_SV = `
<button  type="button" class="btn btn-primary mb-2 button_modal" data-toggle="modal" data-target="#exampleModalLong">
    Thêm mới
  </button>
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Thêm mới học sinh</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <form class="d-flex flex-column" action="">
                <label for="editUsername"> Username: </label>
                <input id="editUsername" name="editUsername" type="text" value="">
                <label for="editPassword">Password: </label>
                <input id="editPassword" name="editPassword" type="text" value="">
                <label for="editName">Tên: </label>
                <input id="editName" name="editName" type="text" value="">
                <label for="editAge">Tuổi: </label>
                <input id="editAge" name="editAge" type="number" value="">
                <label for="editRole">Role: </label>
                <select name="editRole" id="editRole" >
                    <option value="0">Thư ký</option>
                    <option value="1">Hội đồng chấm thi</option>
                    <option value="2">Giáo Viên</option>
                    <option value="3">Học Viên</option>
                </select>
              </form>
            </div>
        </div>
        <div class="modal-footer">
          <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
          <button id="add_new_student" type="button" onclick="add_new_student()" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>
  <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">
  <label class="font-weight-bold" for="editRole">Khoa: </label>
  <select name="editRole" style="margin:0" id="editRole">
        <option value="0">ALL</option>
        <option value="Toan_Tin">Toán Tin</option>
        <option value="Kinh_Te">Kinh Tế</option>
        <option value="Du_Lich">Du Lịch</option>
        <option value="Ngoai_Ngu">Ngoại Ngữ</option>
  </select>`;


const html_QLKL = `
<table id="table_KL" class="table table-hover">
<thead>
    <th>STT</th>
    <th>Tên Khóa Luận</th>
    <th>Ngày Gửi</th>
    <th>Chức năng</th>
</thead>
<tbody id="tbody_data">
</tbody>
</table>`

const html_QLSV = `  
<table id="table_SV" class="table table-hover">
<thead>
    <th>STT</th>
    <th>Tên Sinh Viên</th>
    <th>Username</th>
    <th>Email</th>
    <th>Năm Sinh</th>
    <th>Khoa</th>
    <th>Chức năng</th>
</thead>
<tbody id="tbody_data">
</tbody>
</table>`

const html_QLGV = `  
<table id="table_SV" class="table table-hover">
<thead>
    <th>STT</th>
    <th>Tên Giáo viên</th>
    <th>Username</th>
    <th>Email</th>
    <th>Năm Sinh</th>
    <th>Khoa</th>
    <th>Chức năng</th>
</thead>
<tbody id="tbody_data">
</tbody>
</table>`
const loading_gif = `<img style="display: block;margin-left: auto;margin-right: auto;width:5%" src="../static/images/ajax-loader.gif" alt="">`;
// ________________________________
$(document).ready(()=>{
    run();
});

const run = ()=>{
    document.querySelector("#tag2").addEventListener('click',QLKL);
    document.querySelector("#tag3").addEventListener('click',QLSV);
    document.querySelector("#tag4").addEventListener('click',HDCT);
    document.querySelector("#tag5").addEventListener('click',QLGV)
}

// _____________________________________________________
const getCourse = async () =>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/getcurcourse/',
    });
    return _data;
}
const getDataSV = async ()=>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/user/',
    });
    return _data;
}

const getDataKL = async () =>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/dissertation/',
    });
    return _data; 
}

const getDataHDCT = async ()=>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/getHDCT/',
    });
    return _data;
}

const getCurID = async ()=>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/getcurid/',
    });
    return _data
}

// __________________________________________________________
// SEARCH
const search_func = ()=>{
    let input_value,tbody_data;
    console.log("______________________________");
    input_value = $("#search_box").val().toLowerCase();
    console.log(input_value);
    $("#tbody_data tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(input_value) > -1)
      });
}

// _User
//Get Data User
const QLSV = async () =>{
    $("#div_left").empty();
    data = getDataSV();
    $("#div_left").html(loading_gif)
    data_course = await getCourse()
    current_source = data_course.cur_course;
    console.log(current_source);
    data.then((result)=>{
        $("#div_left").html(html_QLSV);
        document.querySelector('#table_SV').insertAdjacentHTML('beforebegin',modal_html_SV)
        let stt = 0;
        result.forEach((el,index) =>{
                if (el.role > 2){
                    let arr_kl;
                    stt = stt + 1;
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User('${el.id}','${el.username}', '${el.name}', '${el.age}','${el.role}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}')">Xóa</a> </td>
                    </tr>`);
                };
        });
    });
}
const QLGV = async ()=>{
    $("#div_left").empty();
    data = getDataSV();
    $("#div_left").html(loading_gif)
    data_course = await getCourse()
    course_list = []
    console.log(course_list);
    data.then((result)=>{
        $("#div_left").html(html_QLSV);
        document.querySelector('#table_SV').insertAdjacentHTML('beforebegin',modal_html_SV)
        let stt = 0;
        result.forEach((el,index) =>{
                if (el.role === 1){
                    let arr_kl;
                    stt = stt + 1;
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User('${el.id}','${el.username}', '${el.name}', '${el.age}','${el.role}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}')">Xóa</a> </td>
                    </tr>`);
                };
        });
    });
}
//Add New User Function:
const add_new_student = async () =>{
    DOMusername = document.getElementById("editUsername");
    DOMpassword = document.getElementById("editUsername");
    DOMname = document.getElementById("editName");
    DOMage = document.getElementById("editAge");
    // selected Role:
    DOMrole = document.getElementById("editRole");
    let i = DOMrole.selectedIndex;
    // console.log(DOMusername.value);
    // console.log(DOMpassword.value);
    // console.log(DOMname.value);
    // console.log(DOMage.value);
    // console.log(DOMrole.options[i].value);
    data_push = {
        "username" : DOMusername.value,
        "password" : DOMpassword.value,
        "name" : DOMname.value,
        "age" : DOMage.value,
        "role" : DOMrole.value,
        "disser": "",
    }
    await $.ajax({
        type: "POST",
        contentType: "application/json",
        dataType:'json',
        url: "/api/register",
        data: JSON.stringify(data_push),
        success: ()=>{
            console.log("Create Success!");
            $('#close').click();
        }
    });
    setTimeout(function(){ 
        $('#tag3').click(); 
        console.log("chạy Timeout!");
     }, 200);
}
//Delete User Function:
const Delete_User = (par_id) =>{
    let ID_post = {"id": par_id};
    console.log(ID_post);
    $("#div_left").html(loading_gif)
    $.ajax({
        type:"POST",
        url: "/api/login/delete/",
        contentType:"application/json",
        dataType:"json",
        data: JSON.stringify(ID_post),
        success: ()=>{
            $('#tag3').click();
        }
    });
};

//Edit User Function:
const Editing = async (id)=>{
    console.log(`Vao Editing`);
    data_push = {
        "id" : id,
        "name": $("#editName").val(),
        "age": $("#editAge").val(),
        "role": $("#editRole").val()
    }
    await $.ajax({
        type: "POST",
        url: "/api/login/edit/",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(data_push),
        success:()=>{
            console.log("Edit Success!");
            $('#close').click();
        }
    });
    setTimeout(function(){ 
        $('#tag3').click(); 
        console.log("chạy Timeout!");
     }, 200);
}
const Edit_User = (id,username,name,age,role) =>{
    $('.button_modal').click();
    $(".modal-title").html(`Sửa ${name}`);
    $('#editName').val(name);
    $('#editAge').val(age);
    $("select#editRole").val(role);
    $("#editPassword").hide();
    $("label[for='editPassword']").hide();
    $('#editUsername').hide();
    $("label[for='editUsername']").hide();
    $("#add_new_student").attr("onclick",`Editing('${id}')`)
}


// _Disser
// Get Data Disser
const QLKL = async (event) =>{
    event.preventDefault();
    $("#div_left").empty();
    data = getDataKL();
    $("#div_left").html(loading_gif)
    data.then((result)=>{
        let stt = 0;
        $("#div_left").html(html_QLKL);
        document.querySelector('#table_KL').insertAdjacentHTML('beforebegin',modal_html_KL)
        result.forEach((el,index) => {
            stt = stt + 1;
            $("#tbody_data").append(`
            <tr>
            <td>${stt}</td>
            <td>${el.disser_name}</td>
            <td>${el.post_day}</td>
            <td><a href="#">Sửa</a> / <a href="#" onclick="Delete_Disser('${el.id_disser}')">Xóa</a> </td>
            </tr>`)
        });
    });
}
//Add disser
const add_new_disser = async () =>{
    const getid = getCurID();
    let id;
    DOMnamedisser = document.getElementById("editNameDisser");
    DOMtopic = document.getElementById("editTopic");
    await getid.then((result)=>{
        id = result.cur_id;
    })
    console.log(id);
    
    data_push = {
        "id_post" :id,
        "disser_name" : DOMnamedisser.value,
        // "password" : DOMtopic.value
    }
    await $.ajax({
        type: "POST",
        contentType: "application/json",
        dataType:'json',
        url: "/api/disser/",
        data: JSON.stringify(data_push),
        success: ()=>{
            console.log("Create Success!");
            $('#close').click();
        }
    });
    setTimeout(function(){ 
        $('#tag2').click(); 
        console.log("chạy Timeout!");
     }, 200);
}

//Delete Disser Function
const Delete_Disser = (par_id)=>{
    $("#div_left").html(loading_gif)
    data_push = {"id": par_id}
    $.ajax({
        type:"POST",
        contentType:"application/json",
        dataType: "json",
        url: "/api/disser/delete/",
        data: JSON.stringify(data_push),
        success: ()=>{
            $('#tag2').click();
        }
    });
}



//_HDCT
const HDCT = async(event) =>{
    event.preventDefault();
    console.log("RUN!");
}
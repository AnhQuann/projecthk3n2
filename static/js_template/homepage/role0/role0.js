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
<button type="button" class="btn btn-primary mb-2 button_modal" data-toggle="modal" data-target="#exampleModalLong">
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
            <form id="form_add_SV" class="d-flex flex-column" method="POST">
                <label for="addUsername"><span>*</span>Username: </label>
                <input id="addUsername" placeholder="Tên tài khoản" name="addUsername" type="text" value="" required>
                <label for="addPassword"><span>*</span>Password: </label>
                <input id="addPassword" placeholder="Mật khẩu" name="addPassword" type="password" value="" required>
                <label for="addName"><span>*</span>Tên: </label>
                <input id="addName" placeholder="Họ và Tên" name="addName" type="text" value="" required>
                <label for="addEmail"><span>*</span>Email: </label>
                <input id="addEmail" name="addEmail" placeholder="abcxyz@gmail.com" type="email" value="" required>
                <label for="addAge">Năm sinh: </label>
                <input id="addAge" name="addAge" type="number" value="" required>
                <label for="addRole">Role: </label>
                <select name="addRole" id="addRole">
                    <!-- <option value="0">Thư ký</option> -->
                    <!-- <option value="1">Hội đồng chấm thi</option> -->
                    <!-- <option value="2">Giáo Viên</option> -->
                    <option value="3">Học Viên</option>
                </select>

                <label for="addKhoa">Khoa: </label>
                <select name="addKhoa" id="addKhoa">

                </select>
              </form>
              <div class="modal-footer">
                    <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button id="btn_add_student" form="form_add_SV" type="submit" onclick="add_new_student()" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">
  <label class="font-weight-bold" for="editRole">Khoa: </label>
  <select onchange = "change(this)" name="findCourse" style="margin:0" id="findCourse">
        <option value="all" >ALL</option>
        <option value="Toan Tin">Toán Tin</option>
        <option value="Kinh Te">Kinh Tế</option>
        <option value="Du Lich">Du Lịch</option>
        <option value="Ngoai Ngu">Ngoại Ngữ</option>
  </select>`;

const modal_edit_SV = `
        <div class="modal-body">
          <div>
           <h1 class="title_edit"></h1>
            <form id="form_edit_SV" class="d-flex flex-column" method="POST">
                <label for="editUsername"><span>*</span>Username: </label>
                <input id="editUsername" placeholder="Tên tài khoản" name="editUsername" type="text" value="" required>
                <label for="editPassword"><span>*</span>Password: </label>
                <input id="editPassword" placeholder="Mật khẩu" name="editPassword" type="password" value="" required>
                <label for="editName"><span>*</span>Tên: </label>
                <input id="editName" placeholder="Họ và Tên" name="editName" type="text" value="" required>
                <label for="editEmail"><span>*</span>Email: </label>
                <input id="editEmail" name="editEmail" placeholder="abcxyz@gmail.com" type="email" value="" required>
                <label for="editAge">Năm sinh: </label>
                <input id="editAge" name="editAge" type="number" value="" required>
                <label for="editRole">Role: </label>
                <select name="editRole" id="editRole">
                    <!-- <option value="0">Thư ký</option> -->
                    <!-- <option value="1">Hội đồng chấm thi</option> -->
                    <!-- <option value="2">Giáo Viên</option> -->
                    <option value="3">Học Viên</option>
                </select>

                <label for="editKhoa">Khoa: </label>
                <select name="editKhoa" id="editKhoa">
                </select>
                <div class="modal-footer">
                    <button id="close" onclick="back()" type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
                    <button id="btn_edit_student" form="form_edit_SV" type="submit" class="btn btn-primary">Lưu</button>
                </div>
              </form>
            </div>
        </div>`

//HTML_GV
const modal_html_GV = `
<button type="button" class="btn btn-primary mb-2 button_modal" data-toggle="modal" data-target="#exampleModalLong">
    Thêm mới
  </button>
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Thêm mới giáo viên</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <form id="form_add_GV" class="d-flex flex-column" method="POST">
                <label for="addUsername"><span>*</span>Username: </label>
                <input id="addUsername" placeholder="Tên tài khoản" name="addUsername" type="text" value="" required>
                <label for="addPassword"><span>*</span>Password: </label>
                <input id="addPassword" placeholder="Mật khẩu" name="addPassword" type="password" value="" required>
                <label for="addName"><span>*</span>Tên: </label>
                <input id="addName" placeholder="Họ và Tên" name="addName" type="text" value="" required>
                <label for="addEmail"><span>*</span>Email: </label>
                <input id="addEmail" name="addEmail" placeholder="abcxyz@gmail.com" type="email" value="" required>
                <label for="addAge">Năm sinh: </label>
                <input id="addAge" name="addAge" type="number" value="" required>
                <label for="addRole">Role: </label>
                <select name="addRole" id="addRole">
                <option value="0">Thư ký</option> 
                <option value="1">Chấm thi</option>
                <option value="2">Giáo Viên</option>
                    <!-- <option value="3">Học Viên</option> -->
                </select>

                <label for="addKhoa">Khoa: </label>
                <select name="addKhoa" id="addKhoa">

                </select>
              </form>
              <div class="modal-footer">
                    <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button id="btn_add_teachers" form="form_add_GV" type="submit" onclick="add_new_teacher()" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">
  <label class="font-weight-bold" for="editRole">Khoa: </label>
  <select onchange = "change_GV(this)" name="findCourse" style="margin:0" id="findCourse">
        <option value="all" >ALL</option>
        <option value="Toan Tin">Toán Tin</option>
        <option value="Kinh Te">Kinh Tế</option>
        <option value="Du Lich">Du Lịch</option>
        <option value="Ngoai Ngu">Ngoại Ngữ</option>
  </select>`;

const modal_edit_GV = `
        <div class="modal-body">
          <div>
           <h1 class="title_edit"></h1>
            <form id="form_edit_GV" class="d-flex flex-column" method="POST">
                <label for="editUsername"><span>*</span>Username: </label>
                <input id="editUsername" placeholder="Tên tài khoản" name="editUsername" type="text" value="" required>
                <label for="editPassword"><span>*</span>Password: </label>
                <input id="editPassword" placeholder="Mật khẩu" name="editPassword" type="password" value="" required>
                <label for="editName"><span>*</span>Tên: </label>
                <input id="editName" placeholder="Họ và Tên" name="editName" type="text" value="" required>
                <label for="editEmail"><span>*</span>Email: </label>
                <input id="editEmail" name="editEmail" placeholder="abcxyz@gmail.com" type="email" value="" required>
                <label for="editAge">Năm sinh: </label>
                <input id="editAge" name="editAge" type="number" value="" required>
                <label for="editRole">Role: </label>
                <select name="editRole" id="editRole">
                    <option value="0">Thư ký</option> 
                    <option value="1">Chấm thi</option>
                    <option value="2">Giáo Viên</option>
                    <!-- <option value="3">Học Viên</option> -->
                </select>

                <label for="editKhoa">Khoa: </label>
                <select name="editKhoa" id="editKhoa">
                </select>
                <div class="modal-footer">
                    <button id="close" onclick="back_GV()" type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
                    <button id="btn_edit_teacher" form="form_edit_GV" type="submit" class="btn btn-primary">Lưu</button>
                </div>
              </form>
            </div>
        </div>`
    //  

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
const loading_gif = `<img style="display: block;margin-left: auto;margin-right: auto;width:5%" class="mt-2" src="../static/images/ajax-loader.gif" alt="">`;
const loading_gif2 = `<img style="display: block;margin-left: auto;margin-right: auto;" src="../static/images/ajax-loader2.gif" alt="">`;

// ________________________________
$(document).ready(()=>{
    run();
});

const run = ()=>{
    try {
        document.querySelector("#tag2").addEventListener('click',QLKL);
        document.querySelector("#tag3").addEventListener('click',QLSV);
        document.querySelector("#tag4").addEventListener('click',HDCT);
        document.querySelector("#tag5").addEventListener('click',QLGV);
    } catch (error) {
        console.log(error);
    }
}
// _____________________________________________________
const getCurCourse = async () =>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/getcurcourse/',
    });
    return _data;
}
const getCourse = async ()=>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/course',
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
//BackHome 
const back = ()=>{
    $('#tag3').click();
}
const back_GV = ()=>{
    $('#tag5').click();
}
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

// STUDENT
//Get Data User
const change = async (selectObject)=>{
    let value = selectObject.value
    data = getDataSV();
    $("#table_SV").html(loading_gif2)
    data_cur_course = await getCurCourse();
    data_course = await getCourse();
    current_source = data_cur_course.cur_course;
    data.then((result)=>{
            $("#table_SV").html(html_QLSV);
            let stt = 0;
            result.forEach((el,index) =>{
                let id_course;
                    data_course.forEach((element)=>{
                        if (el.course === element.course_name){
                            id_course = element.id;
                        }
                    });
                if (el.role > 2 && value === "all"){
                    stt = stt + 1;
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}')">Xóa</a> </td>
                    </tr>`);
                }
                else if (el.role > 2 && el.course === value){
                    stt = stt + 1;
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}')">Xóa</a> </td>
                    </tr>`);
                }
        });
    });
}

const QLSV = async () =>{
    $("#div_left").empty();
    data = getDataSV();
    $("#div_left").html(loading_gif2)
    data_cur_course = await getCurCourse();
    current_source = data_cur_course.cur_course;
    data_course = await getCourse(); 
    data.then((result)=>{
        $("#div_left").html(html_QLSV);
        document.querySelector('#table_SV').insertAdjacentHTML('beforebegin',modal_html_SV);
        data_course.forEach((course,index)=>{
            $("#addKhoa").append(`<option value="${course.id}">${course.course_name}</option>`)
        })
            let stt = 0;
            result.forEach((el,index) =>{
                if (el.role > 2){
                    let arr_kl;
                    stt = stt + 1;
                    let id_course;
                    data_course.forEach((element)=>{
                        if (el.course === element.course_name){
                            id_course = element.id;
                        }
                    });
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}')">Xóa</a> </td>
                    </tr>`);
                }
        });
    });
}
//Add New User Function:
const add_new_student = () =>{
        $("#form_add_SV").submit(async (e)=>{
            e.preventDefault()
            DOMusername = document.getElementById("addUsername");
            DOMpassword = document.getElementById("addUsername");
            DOMname = document.getElementById("addName");
            DOMage = document.getElementById("addAge");
            DOMemail = document.getElementById("addEmail");
            // selected Role:
            DOMrole = document.getElementById("addRole");
            DOMKhoa = document.getElementById("addKhoa");
            let j = DOMKhoa.selectedIndex;
            let i = DOMrole.selectedIndex;
            // console.log(DOMusername.value);
            // console.log(DOMpassword.value);
            // console.log(DOMname.value);
            // console.log(DOMage.value);
            console.log(DOMKhoa.value);
             data_push = {
                "id_course": DOMKhoa.value,
                "username" : DOMusername.value,
                "password" : DOMpassword.value,
                "name" : DOMname.value,
                "yob" : DOMage.value,
                "email": DOMemail.value,
                "role" : DOMrole.value,
                "disser": "",
            }
            document.getElementById("form_add_SV").insertAdjacentHTML('afterbegin',loading_gif2);
            await $.ajax({
                type: "POST",
                contentType: "application/json",
                dataType:'json',
                url: "/api/registeruser",
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
            return false;
        });
}
//Delete User Function:
const Delete_User = (par_id) =>{
    let ID_post = {"id": par_id};
    if (confirm("Bạn có muốn xóa không?")){
        $.ajax({
            type:"POST",
            url: "/api/user/delete/",
            contentType:"application/json",
            dataType:"json",
            data: JSON.stringify(ID_post),
            success: ()=>{
                $('#tag3').click();
            }
        });
    }
    else{
        return
    }
    $("#div_left").html(loading_gif2)
};

//Edit User Function:
const Editing = (id,cur_khoa)=>{
        $("#form_edit_SV").submit(async (event)=>{
            event.preventDefault();
            console.log(`Vao Editing`);
            // console.log($("#editName").val());
            // console.log($("#editAge").val());
            // console.log($("#editRole").val());
            // console.log($("#editEmail").val());
            // console.log(cur_khoa);
            // console.log($("#editKhoa").val());
            data_push = {
                "id" : id,
                "name": $("#editName").val(),
                "yob": $("#editAge").val(),
                "role": $("#editRole").val(),
                "email":$("#editEmail").val(),
                "cur_khoa":cur_khoa,
                "new_khoa":$("#editKhoa").val()
            }
            $("#div_left").html(loading_gif2);
            await $.ajax({
                type: "POST",
                url: "/api/user/edit/",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(data_push),
                success:()=>{
                    console.log("Edit Success!");
                    $('#close').click();
                }
            });
            $('#tag3').click(); 
        })
}
//${el.id}', '${el.name}', '${el.yob}','${el.role}','${el.email}','${el.course}
const Edit_User = async (id,name,yob,role,email,khoa,user,pass) =>{
    $("#div_left").html(loading_gif2);
    cur_khoa = khoa;
    data_course = await getCourse();
    $("#div_left").html(modal_edit_SV);
    data_course.forEach((course,index)=>{
        $("#editKhoa").append(`<option value="${course.id}">${course.course_name}</option>`)
    })
    $(".title_edit").html(`Sửa ${name}`);
    $('#editName').val(name);
    $('#editAge').val(yob);
    $('#editEmail').val(email);
    $("select#editRole").val(role);
    $("select#editKhoa").val(khoa);

    $("#editPassword").hide();
    $("#editPassword").val(pass);
    $("label[for='editPassword']").hide();
    $('#editUsername').hide();
    $("#editUsername").val(user)
    $("label[for='editUsername']").hide();

    $("#btn_edit_student").attr("onclick",`Editing('${id}','${cur_khoa}')`)
}

//TEACHER
const change_GV = async (selectObject)=>{
    let value = selectObject.value
    data = getDataSV();
    $("#table_SV").html(loading_gif2)
    data_cur_course = await getCurCourse();
    data_course = await getCourse();
    current_source = data_cur_course.cur_course;
    data.then((result)=>{
            $("#table_SV").html(html_QLSV);
            let stt = 0;
            result.forEach((el,index) =>{
                let id_course;
                    data_course.forEach((element)=>{
                        if (el.course === element.course_name){
                            id_course = element.id;
                        }
                    });
                if (el.role == 2 && value === "all"){
                    stt = stt + 1;
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User_GV('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User_GV('${el.id}')">Xóa</a> </td>
                    </tr>`);
                }
                else if (el.role == 2 && el.course === value){
                    stt = stt + 1;
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User_GV('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User_GV('${el.id}')">Xóa</a> </td>
                    </tr>`);
                }
        });
    });
}

const QLGV = async () =>{
    $("#div_left").empty();
    data = getDataSV();
    $("#div_left").html(loading_gif2)
    data_cur_course = await getCurCourse();
    current_source = data_cur_course.cur_course;
    data_course = await getCourse(); 
    data.then((result)=>{
        $("#div_left").html(html_QLGV);
        document.querySelector('#table_SV').insertAdjacentHTML('beforebegin',modal_html_GV);
        data_course.forEach((course,index)=>{
            $("#addKhoa").append(`<option value="${course.id}">${course.course_name}</option>`)
        })
            let stt = 0;
            result.forEach((el,index) =>{
                if (el.role == 2){
                    let arr_kl;
                    stt = stt + 1;
                    let id_course;
                    data_course.forEach((element)=>{
                        if (el.course === element.course_name){
                            id_course = element.id;
                        }
                    });
                    $("#tbody_data").append(`
                    <tr>
                    <td>${stt}</td>
                    <td>${el.name}</td>
                    <td>${el.username}</td>
                    <td>${el.email}</td>
                    <td>${el.yob}</td>
                    <td>${el.course}</td>
                    <td><a href="#" onclick="Edit_User_GV('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User_GV('${el.id}')">Xóa</a> </td>
                    </tr>`);
                }
        });
    });
}

const add_new_teacher = () =>{
    $("#form_add_GV").submit(async (e)=>{
        e.preventDefault()
        DOMusername = document.getElementById("addUsername");
        DOMpassword = document.getElementById("addUsername");
        DOMname = document.getElementById("addName");
        DOMage = document.getElementById("addAge");
        DOMemail = document.getElementById("addEmail");
        // selected Role:
        DOMrole = document.getElementById("addRole");
        DOMKhoa = document.getElementById("addKhoa");
        let j = DOMKhoa.selectedIndex;
        let i = DOMrole.selectedIndex;
        // console.log(DOMusername.value);
        // console.log(DOMpassword.value);
        // console.log(DOMname.value);
        // console.log(DOMage.value);
        console.log(DOMKhoa.value);
         data_push = {
            "id_course": DOMKhoa.value,
            "username" : DOMusername.value,
            "password" : DOMpassword.value,
            "name" : DOMname.value,
            "yob" : DOMage.value,
            "email": DOMemail.value,
            "role" : DOMrole.value,
            "disser": "",
        }
        document.getElementById("form_add_GV").insertAdjacentHTML('afterbegin',loading_gif2);
        await $.ajax({
            type: "POST",
            contentType: "application/json",
            dataType:'json',
            url: "/api/registeruser",
            data: JSON.stringify(data_push),
            success: ()=>{
                console.log("Create Success!");
                $('#close').click();
            }
        });
        setTimeout(function(){ 
            $('#tag5').click(); 
            console.log("chạy Timeout!");
        }, 200);
        return false;
    });
}

const Delete_User_GV = (par_id) =>{
    let ID_post = {"id": par_id};
    if (confirm("Bạn có muốn xóa không?")){
        $.ajax({
            type:"POST",
            url: "/api/user/delete/",
            contentType:"application/json",
            dataType:"json",
            data: JSON.stringify(ID_post),
            success: ()=>{
                $('#tag5').click();
            }
        });
    }
    else{
        return
    }
    $("#div_left").html(loading_gif2)
};

//Edit User Function:
const Editing_GV = (id,cur_khoa)=>{
    $("#form_edit_GV").submit(async (event)=>{
        event.preventDefault();
        console.log(`Vao Editing`);
        console.log($("#editName").val());
        console.log($("#editAge").val());
        console.log($("#editRole").val());
        console.log($("#editEmail").val());
        console.log(cur_khoa);
        console.log($("#editKhoa").val());
        data_push = {
            "id" : id,
            "name": $("#editName").val(),
            "yob": $("#editAge").val(),
            "role": $("#editRole").val(),
            "email":$("#editEmail").val(),
            "cur_khoa":cur_khoa,
            "new_khoa":$("#editKhoa").val()
        }
        $("#div_left").html(loading_gif2);
        await $.ajax({
            type: "POST",
            url: "/api/user/edit/",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data_push),
            success:()=>{
                console.log("Edit Success!");
                $('#close').click();
            }
        });
        $('#tag5').click(); 
    })
}
//${el.id}', '${el.name}', '${el.yob}','${el.role}','${el.email}','${el.course}
    const Edit_User_GV = async (id,name,yob,role,email,khoa,user,pass) =>{
    $("#div_left").html(loading_gif2);
    cur_khoa = khoa;
    data_course = await getCourse();
    $("#div_left").html(modal_edit_GV);
    data_course.forEach((course,index)=>{
        $("#editKhoa").append(`<option value="${course.id}">${course.course_name}</option>`)
    })
    $(".title_edit").html(`Sửa ${name}`);
    $('#editName').val(name);
    $('#editAge').val(yob);
    $('#editEmail').val(email);
    $("select#editRole").val(role);
    $("select#editKhoa").val(khoa);

    $("#editPassword").hide();
    $("#editPassword").val(pass);
    $("label[for='editPassword']").hide();
    $('#editUsername').hide();
    $("#editUsername").val(user)
    $("label[for='editUsername']").hide();

    $("#btn_edit_teacher").attr("onclick",`Editing_GV('${id}','${cur_khoa}')`)
    }


// _Disser
// Get Data Disser
const QLKL = async (event) =>{
    event.preventDefault();
    $("#div_left").empty();
    data = getDataKL();
    $("#div_left").html(loading_gif2)
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
    $("#div_left").html(loading_gif2)
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
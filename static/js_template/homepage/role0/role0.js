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
//#1
  const modal_edit_KL = `
  <div class="modal-body">
    <div>
     <h1 class="title_edit"></h1>
      <form id="form_edit_KL" class="d-flex flex-column" method="POST">
          <label for="editUsername"><span>*</span>Username: </label>
          <input id="editUsername" placeholder="Tên tài khoản" name="editUsername" type="text" value="" required>
          <div class="modal-footer">
              <button id="close" onclick="back_KL()" type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
              <button id="btn_edit_disser" form="form_edit_KL" type="submit" class="btn btn-primary">Lưu</button>
          </div>
        </form>
      </div>
  </div>`
  ////////////////////////////////////////

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
                    <!-- <option value="0">Thư ký</option> -->
                    <!-- <option value="1">Chấm thi</option> -->
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

const modal_html_QDBV = `
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
                <form id="form_add_QDBV" class="d-flex flex-column" method="POST">
                    <label for="addwavename"><span>*</span>wavename: </label>
                    <input id="addUsername" placeholder="Tên tài khoản" name="addUsername" type="text" value="" required>
                    <label for="addPassword"><span>*</span>Password: </label>
                    <input id="addPassword" placeholder="Mật khẩu" name="addPassword" type="password" value="" required>
                    <label for="addName"><span>*</span>Tên: </label>
                    <input id="addName" placeholder="Họ và Tên" name="addName" type="text" value="" required>
                    <label for="addEmail"><span>*</span>Email: </label>
                    <input id="addEmail" name="addEmail" placeholder="abcxyz@gmail.com" type="email" value="" required>

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
  
const modal_edit_QDBV = `
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
      </div>`;

const modal_html_HDCT = `
      <button id="add_hdct" onclick="add_new_examine()" type="button" class="btn btn-primary mb-2 button_modal" data-toggle="modal" data-target="#exampleModalLong">
          Thêm mới
        </button>
        <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">
        <label class="font-weight-bold" for="editRole">Khoa: </label>
        <select onchange = "change_HDCT(this)" name="findCourse" style="margin:0" id="findCourse">
              <option value="all" >ALL</option>
              <option value="Toan Tin">Toán Tin</option>
              <option value="Kinh Te">Kinh Tế</option>
              <option value="Du Lich">Du Lịch</option>
              <option value="Ngoai Ngu">Ngoại Ngữ</option>
        </select>`;

const html_add_HDCT = `
        <div class="modal-body">
        <div>
        <h1 class="title_edit"></h1>
        <form id="form_add_HDCT" class="d-flex flex-column" method="POST">
            <label for="addHDCT"><span>*</span>Khóa: </label>
            <input id="addHDCT" placeholder="Khóa" name="addHDCT" type="number" value="" required>
            <label for="editKhoa">Khoa: </label>
            <select name="editKhoa" id="editKhoa">
            <option value="All" selected></option>
            </select>
            <label for="editKhoas">Ngành: </label>
            <select name="editKhoas" id="editKhoas">
            </select>
            
        </form>
        <div class="modal-footer">
                <button id="close" onclick="back_HDCT()" type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
                <button id="btn_edit_HDCT" form="form_add_HDCT" type="submit" class="btn btn-primary">Lưu</button>
            </div>
        </div>
        </div>`;


const modal_edit_HDCT = `
<div class="modal-body">
  <div>
   <h1 class="title_edit"></h1>
    <form id="form_edit_KL" class="d-flex flex-column" method="POST">
            <label for="editKhoa">Khoa: </label>
            <select name="editKhoa" id="editKhoa"></select>
            <label for="editNganh">Ngành: </label>
            <select name="editNganh" id="editNganh"></select>
            <label for="editKhoas">Khóa </label>
            <input id="editKhoas" placeholder="Khóa" name="editKhoas" type="number" value="" required>
        <div class="modal-footer">
            <button id="close" onclick="back_HDCT()" type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
            <button id="btn_edit_disser" form="form_edit_KL" type="submit" class="btn btn-primary">Lưu</button>
        </div>
      </form>
    </div>
</div>`

const add_member_HDCT = `
<div class="modal-body">
  <div>
   <h1 class="title_edit"></h1>
        <table id="table_HDCT" class="table table-hover">
        <thead>
            <th>STT</th>
            <th>Tên Giáo Viên</th>
            <th>Năm sinh</th>
            <th>Email</th>
            <th>Khoa</th>
            <th>Chức năng</th>
        </thead>
        <tbody id="tbody_data">
        </tbody>
        </table>

        <div class="modal-footer">
            <button id="close" onclick="back_HDCT()" type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
            <button id="btn_add_member" type="button" class="btn btn-primary">Lưu</button>
        </div>

    </div>
</div>`


const html_HDCT = `
<table id="table_HDCT" class="table table-hover">
<thead>
    <th>STT</th>
    <th>Mã hội đồng</th>
    <th>Khoa</th>
    <th>Ngành</th>
    <th>Khóa</th>
    <th>Thành viên</th>   
    <th>Chức năng</th> 
</thead>
<tbody id="tbody_data">
</tbody>
</table>
`;

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
</table>`;

const html_QLDBV = `  
<table id="table_SV" class="table table-hover">
<thead>
    <th>STT</th>
    <th>Tên Đợt bảo vệ</th>
    <th>Đề tài</th>
    <th>Danh sách SV</th>
    <th>Trạng thái</th>
</thead>
<tbody id="tbody_data">
</tbody>
</table>`;

const loading_gif = `<img style="display: block;margin-left: auto;margin-right: auto;width:5%" class="mt-2" src="../static/images/ajax-loader.gif" alt="">`;
const loading_gif2 = `<img style="display: block;margin-left: auto;margin-right: auto;" src="../static/images/ajax-loader2.gif" alt="">`;
const loading = ()=>{
    $("#div_left").html(loading_gif2);
}
const left_show = (par)=>{
    $("#div_left").html(par);
}
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
        document.querySelector("#tag6").addEventListener('click',QLDBV);
        document.querySelector("#tag7").addEventListener('click',QLD)
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

const getCourseWave = async ()=>{
    const _data = await $.ajax({
        type: 'GET',
        url: '/api/coursewave/',
    });
    return _data
}
//Dot Bao Ve:
const QLDBV = async ()=>{
    console.log(`Vao QLDBV`);
    $("#div_left").empty();
    $("#div_left").html(loading_gif2)
    let data = await getCourseWave();
    console.log(data);
    $("#div_left").html(html_QLDBV);
    document.querySelector('#table_SV').insertAdjacentHTML('beforebegin',modal_html_SV);
   
}



// __________________________________________________________
//BackHome 
const back = ()=>{
    $('#tag3').click();
}
const back_GV = ()=>{
    $('#tag5').click();
}
const back_HDCT = ()=>{
    $('#tag4').click();
}
const back_QDBV = ()=>{
    $('#tag6').click();
}
const back_KL = ()=>{
    $('#tag2').click();
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
                    <td><a href="#" onclick="Edit_User('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}','${id_course}')">Xóa</a> </td>
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
                    <td><a href="#" onclick="Edit_User('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}','${id_course}')">Xóa</a> </td>
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
                    <td><a href="#" onclick="Edit_User('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User('${el.id}','${id_course}')">Xóa</a> </td>
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
                "id_exarmine":DOMKhoa.value
            }
            document.getElementById("form_add_SV").insertAdjacentHTML('afterbegin',loading_gif2);
            await $.ajax({
                type: "POST",
                contentType: "application/json",
                dataType:'json',
                url: "/api/registeruser/",
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
const Delete_User = (par_id, par_id_course) =>{
    let ID_post = {"id": par_id,
                    "id_course": par_id_course
                  };
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

//TEACHER => Done
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
                    <td><a href="#" onclick="Edit_User_GV('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User_GV('${el.id}','${id_course}')">Xóa</a> </td>
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
                    <td><a href="#" onclick="Edit_User_GV('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User_GV('${el.id}','${id_course}')">Xóa</a> </td>
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
                    <td><a href="#" onclick="Edit_User_GV('${el.id}', '${el.name}', '${el.yob}', '${el.role}', '${el.email}', '${id_course}','${el.username}','${el.password}')">Sửa</a> / <a href="#" onclick="Delete_User_GV('${el.id}','${id_course}')">Xóa</a> </td>
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
            url: "/api/registeruser/",
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

const Delete_User_GV = (par_id,par_id_course) =>{
    let ID_post = {"id": par_id,
                    "id_course": par_id_course};
                    
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
        // console.log(`Vao Editing`);
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
        document.querySelector('#table_KL').insertAdjacentHTML('beforebegin',modal_html_KL);
        result.forEach((el,index) => {
            stt = stt + 1;
            $("#tbody_data").append(`
            <tr>
            <td>${stt}</td>
            <td>${el.disser_name}</td>
            <td>${el.post_day}</td>
            <td><a href="#" onclick="Edit_User_KL('${el.id_disser}','${el.disser_name}','${el.post_day}')">Sửa</a> / <a href="#" onclick="Delete_Disser('${el.id_disser}')">Xóa</a> </td>
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
        url: "/api/dissertation/",
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
//Edit Disser Function
//${el.id}', '${el.name}', '${el.yob}','${el.role}','${el.email}','${el.course}
const Edit_User_KL = async (id,disser_name,post_day) =>{
    $("#div_left").html(loading_gif2);
    $("#div_left").html(modal_edit_KL);
    
    $(".title_edit").html(`Sửa ${disser_name}`);
    $("label[for='editPassword']").hide();
    $('#editUsername').val(disser_name);
    
    
    document.querySelector("#btn_edit_disser").addEventListener('click', async (e)=>{
        e.preventDefault();
        data_push = {
            "id" : id,
            "disser_name": $("#editUsername").val()
        }
        $("#div_left").html(loading_gif2);
        await $.ajax({
            type: "POST",
            url: "/api/disser/edit/",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data_push),
            success:()=>{
                console.log("Edit Success!");
                $('#close').click();
            }
        });
        $('#tag2').click(); 
    });
    return false;
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



//HDCT_Button
const getDataExamine = async () =>{
    const _data = $.ajax({
        type: 'GET',
        url: '/api/exarmine/',
    });
    return _data;
}

//Add
// const cur_select = (selectObject) =>{
//     console.log(selectObject);
    
//     console.log(selectObject.html);
    
// }
const get_Nganh = () =>{
    _data = $.ajax({
        type: 'GET',
        url: 'api/exarmineinfo/'
    })
    return _data
}

const add_new_examine = async ()=>{
    $("#div_left").html(loading_gif2);
    data_nganh = await get_Nganh();
    data_Examine = await getDataExamine();
    data_course = await getCourse();
    $("#div_left").html(html_add_HDCT);
    data_course.forEach((course,index)=>{
        $("#editKhoa").append(`<option value="${course.id}">${course.course_name}</option>`)
    });
    $("#editKhoas").hide();
    $("label[for='editKhoas']").hide();

    let clone_strChoose
    let clone_nganh
    $("#editKhoa").change(function(){
        strChoose = this.options[this.selectedIndex].text;
        $("#editKhoas").show();
        $("label[for='editKhoas']").show();
        $("#editKhoas").empty();
        data_nganh.forEach((el)=>{
            ten_khoa_cua_nganh = Object.keys(el)[0];
            if (strChoose === ten_khoa_cua_nganh){  
                console.log(`Query...`);
                Object.keys(el[ten_khoa_cua_nganh]).forEach((e)=>{
                    $("#editKhoas").append(`<option value="${e}">${e}</option>`);
                });
            }
        });
        clone_strChoose = strChoose
    });

    $("#form_add_HDCT").submit(async (event)=>{
        event.preventDefault();
        let clone_input_khoa = document.getElementById("addHDCT").value
        clone_nganh = document.getElementById("editKhoas").value
        console.log(clone_strChoose);
        console.log(clone_input_khoa);
        console.log(clone_nganh);
        arrayEmpty = []
        join_string = clone_nganh + clone_input_khoa;
        data_to_push = {
            "ID": join_string,
            "members": arrayEmpty
        }
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(data_to_push),
            url: '/api/registerexamine/',
            success: ()=>{
                $('#tag4').click();
            }
        });
        console.log("SUBMIT!!");
        return false;
    });
}

//Read => Done
const change_HDCT = async (selectObject)=>{
    let value = selectObject.value
    console.log(value);
    
    $("#table_HDCT").html(loading_gif2)
    data = getDataExamine();
    data_course = await getCourse();
    data.then((result)=>{
            $("#table_HDCT").html(html_HDCT);
            let stt = 0;
            result.forEach((el,index) =>{
                let id_course;
                    data_course.forEach((element)=>{
                        if (el.course === element.course_name){
                            id_course = element.id;
                        }
                    });
                if (value === "all"){
                    stt +=1;
                    if (el.name.length > 0){
                        $("#tbody_data").append(`
                            <tr>
                            <td>${stt}</td>
                            <td>${el.ID}</td>
                            <td>${el.course}</td>
                            <td>${el.class}</td>
                            <td>${el.school_year}</td>
                            <td>${el.name}</td>            
                            <td><a href="#" onclick="Member('${el.id}','${el.course}','${el.ID}')"> Member</a> / <a onclick="Edit_HDCT('${el.id}','${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}');" href="#">Sửa</a> / <a href="#" onclick="Delete_Examine('${el.id}')">Xóa</a> </td>
                            </tr>`);
                        }
                        else {
                            $("#tbody_data").append(`
                            <tr>
                            <td>${stt}</td>
                            <td>${el.ID}</td>
                            <td>${el.course}</td>
                            <td>${el.class}</td>
                            <td>${el.school_year}</td>
                            <td style="color:red">Chưa có thành viên nào</td>            
                            <td><a href="#" onclick="Member('${el.id}','${el.course}','${el.ID}')"> Member</a> / <a onclick="Edit_HDCT('${el.id}','${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}');" href="#">Sửa</a> / <a href="#" onclick="Delete_Examine('${el.id}')">Xóa</a> </td>
                            </tr>`);
                        }   
                }
                else if (value === el.course){
                    if (el.name.length > 0){
                        stt = stt + 1;
                        $("#tbody_data").append(`
                            <tr>
                            <td>${stt}</td>
                            <td>${el.ID}</td>
                            <td>${el.course}</td>
                            <td>${el.class}</td>
                            <td>${el.school_year}</td>
                            <td>${el.name}</td>            
                            <td><a href="#" onclick="Member('${el.id}','${el.course}','${el.ID}')"> Member</a> / <a onclick="Edit_HDCT('${el.id}','${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}');" href="#">Sửa</a> / <a href="#" onclick="Delete_Examine('${el.id}')">Xóa</a> </td>
                            </tr>`);
                        }
                        else {
                            $("#tbody_data").append(`
                            <tr>
                            <td>${stt}</td>
                            <td>${el.ID}</td>
                            <td>${el.course}</td>
                            <td>${el.class}</td>
                            <td>${el.school_year}</td>
                            <td style="color:red">Chưa có thành viên nào</td>            
                            <td><a href="#" onclick="Member('${el.id}','${el.course}','${el.ID}')"> Member</a> / <a onclick="Edit_HDCT('${el.id}','${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}');" href="#">Sửa</a> / <a href="#" onclick="Delete_Examine('${el.id}')">Xóa</a> </td>
                            </tr>`);
                        }  
                }
        });
    });
}

const HDCT = async(event) =>{
    event.preventDefault();
    $("#div_left").empty();
    $("#div_left").html(loading_gif2)
    data_Examine = await getDataExamine();
    data_course = await getCourse(); 
    let stt = 0;
    $("#div_left").html(html_HDCT);
    document.querySelector('#table_HDCT').insertAdjacentHTML('beforebegin',modal_html_HDCT)
    data_course.forEach((course)=>{
        $("#addKhoa").append(`<option value="${course.id}">${course.course_name}</option>`)
    })
    data_Examine.forEach((el,index)=>{
        stt = stt + 1;
        if (el.name.length > 0){
        $("#tbody_data").append(`
            <tr>
            <td>${stt}</td>
            <td>${el.ID}</td>
            <td>${el.course}</td>
            <td>${el.class}</td>
            <td>${el.school_year}</td>
            <td>${el.name}</td>            
            <td><a href="#" onclick="Member('${el.id}','${el.course}','${el.ID}')"> Member</a> / <a onclick="Edit_HDCT('${el.id}','${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}');" href="#">Sửa</a> / <a href="#" onclick="Delete_Examine('${el.id}')">Xóa</a> </td>
            </tr>`);
        }
        else {
            $("#tbody_data").append(`
            <tr>
            <td>${stt}</td>
            <td>${el.ID}</td>
            <td>${el.course}</td>
            <td>${el.class}</td>
            <td>${el.school_year}</td>
            <td style="color:red">Chưa có thành viên nào</td>            
            <td><a href="#" onclick="Member('${el.id}','${el.course}','${el.ID}')"> Member</a> / <a onclick="Edit_HDCT('${el.id}','${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}');" href="#">Sửa</a> / <a href="#" onclick="Delete_Examine('${el.id}')">Xóa</a> </td>
            </tr>`);
        }
    });
};



//#2
const Member =  async (id,course,ID)=>{
    console.log(id);
    console.log(course);
    console.log(ID);
    
    loading();
    data_Examine = await getDataExamine();
    data_nganh = await get_Nganh();
    data_user = await getDataSV();
    query_Examine = data_Examine.map((el)=>{
        if (el.id === id){
            return el;
        }
    })
    array_member_select = query_Examine[0].members
    left_show(add_member_HDCT);
    $(".title_edit").html(ID +" "+ course + " - "+ " Danh sách Giáo Viên");
    let stt = 0
    data_user.forEach((element)=>{
            if (element.role === 2 && element.course === course){
                stt = stt + 1;
                $("#tbody_data").append(`
                <tr>
                <td>${stt}</td>
                <td>${element.username}</td>
                <td>${element.yob}</td>
                <td>${element.email}</td>
                <td>${element.course}</td>       
                <td><button id="btn_member_remove" class="btn btn-danger">Remove</button></td>
                </tr>`);
            }
            // else if (element.role === 2 && element.course === course && element.id !== mem) {
            //     stt = stt + 1;
            //     $("#tbody_data").append(`
            //     <tr>
            //     <td>${stt}</td>
            //     <td>${element.username}</td>
            //     <td>${element.yob}</td>
            //     <td>${element.email}</td>
            //     <td>${element.course}</td>       
            //     <td><button id="btn_member_add" class="btn btn-success">Add</button></td>
            //     </tr>`);
            // }
  
    });

    
    let data_empty = []
    
    
    
}









//Delete => Done
const Delete_Examine = (par_id)=>{
    data_push = {"id": par_id};
    if (confirm("Bạn có muốn xóa không?")){
        console.log("confirm");
        $.ajax({
            type:"POST",
            contentType:"application/json",
            dataType: "json",
            url: "/api/exarmine/delete/",
            data: JSON.stringify(data_push),
            success: ()=>{
                $('#tag4').click();
            }
        });
    }
    else{
        return
    }
    $("#div_left").html(loading_gif2)
}
//Edit HDCT:
//${el.id},${el.ID}','${el.course}','${el.class}','${el.school_year}','${el.members}
const Edit_HDCT = async (id,ID,course,_class,school_year,members) =>{
    loading();
    data_course = await getCourse();
    data_nganh = await get_Nganh(); 
    // console.log(id);
    // console.log(ID);
    // console.log(course);
    // console.log(_class);
    // console.log(school_year);
    // console.log(members);
    $("#div_left").html(modal_edit_HDCT);
    $(".title_edit").html(`Sửa ${course} - ${ID} - ${_class}`);
    data_course.forEach((course,index)=>{
        $("#editKhoa").append(`<option value="${course.course_name}">${course.course_name}</option>`)
    });
    $('#editKhoa').val(course);

    data_nganh.forEach((el)=>{
        ten_khoa_cua_nganh = Object.keys(el)[0];
        if (document.getElementById("editKhoa").value === ten_khoa_cua_nganh){
            console.log(`Query... ${ten_khoa_cua_nganh}`);
            console.log(Object.keys(el[ten_khoa_cua_nganh]));
            Object.keys(el[ten_khoa_cua_nganh]).forEach((e)=>{
                $("#editNganh").append(`<option value="${e}">${e}</option>`);
            });
        }   
    });
    
    $("#editKhoa").change(function(){
        strChoose = this.options[this.selectedIndex].text;
        $("#editKhoas").show();
        $("label[for='editKhoas']").show();
        $("#editNganh").empty();
        data_nganh.forEach((el)=>{
            ten_khoa_cua_nganh = Object.keys(el)[0];
            if (strChoose === ten_khoa_cua_nganh){  
                console.log(`Query...`);
                Object.keys(el[ten_khoa_cua_nganh]).forEach((e)=>{
                    $("#editNganh").append(`<option value="${e}">${e}</option>`);
                });
            }
        });
    });
    let split_str = ID.split('',2)
    let join_str = split_str.join('');
    $('#editNganh').val(join_str);
    $('#editKhoas').val(school_year);
    

    //Push_data
    document.querySelector("#btn_edit_disser").addEventListener('click', async (e)=>{
        e.preventDefault();
        select_value_nganh = document.getElementById("editNganh").value
        select_value_khoas = document.getElementById("editKhoas").value;
        result_to_push = select_value_nganh+select_value_khoas
        data_push = {
            "id": id,
            "ID" : result_to_push,
        }
        $("#div_left").html(loading_gif2);
        await $.ajax({
            type: "POST",
            url: "/api/exarmine/edit",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(data_push),
            success:()=>{
                console.log("Edit Success!");
            }
        });
        back_HDCT();
    });
    return false;
}

//QL_DIEM
html_QLD = `
<form action="" method="POST">
            <div class="form-group row">
                <div class="col-md-3 d-flex justify-content-between align-items-center">
                    <div>
                        <label for="QLdiem_khoa">Khoa </label>
                    </div>

                    <div>
                        <select class="form-control" name="QLdiem_khoa" id="QLdiem_khoa">
                            <option value="">1123123123123</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    
                </div>
            </div>

            <div class="form-group row">
                    <div class="col-md-3 d-flex justify-content-between align-items-center">
                        <div>
                            <label for="QLdiem_nganh">Ngành </label>
                        </div>
    
                        <div>
                            <select class="form-control" name="QLdiem_nganh" id="QLdiem_nganh">
                                <option value="">1123123123123</option>
                                <option value="">2</option>
                            </select>
                        </div>             
                    </div>
                </div>
            <!-- Point of Teacher -->
            <div id="giaovien_chamdiem" class="d-flex justify-content-center flex-column">
                <div class="mb-2">
                    <label for="111"> Nguyen Lam Tung </label> <input id="111" type="number" value="">
                </div>
                <div>
                    <label for="111"> Nguyen Lam Tung </label> <input id="111" type="number" value="">
                </div>
            </div>
            <!-- Submit Button -->
            <div class="d-flex justify-content-center mt-5">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
    </form>
`;

const QLD = async ()=>{
    event.preventDefault();
    let stt = 0;
    $("#div_left").empty();
    loading();
    left_show(html_QLD);
    $("#div_left").html(html_QLD);
}
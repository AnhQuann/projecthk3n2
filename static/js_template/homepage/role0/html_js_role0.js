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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>
  <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">`;

const modal_html_SV = `
<button type="button" class="btn btn-primary mb-2" data-toggle="modal" data-target="#exampleModalLong">
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
  <input id="search_box" class="mr-2" type="search" placeholder="Search" onkeyup="search_func()" aria-label="Search">`;

const html_QLKL = `
<table id="table_KL" class="table">
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
<table id="table_SV" class="table">
<thead>
    <th>STT</th>
    <th>Tên Sinh Viên</th>
    <th>Username</th>
    <th>Tuổi</th>
    <th>Các bài khóa luận</th>
    <th>Chức năng</th>
</thead>
<tbody id="tbody_data">
</tbody>
</table>`
const loading_gif = `<img style="display: block;margin-left: auto;margin-right: auto;width:5%" src="../static/images/ajax-loader.gif" alt="">`;
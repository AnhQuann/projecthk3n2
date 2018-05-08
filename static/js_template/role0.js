$(document).ready(()=>{
    run();
});

const run = ()=>{
    document.querySelector("#tag2").addEventListener('click',QLKL);
    document.querySelector("#tag3").addEventListener('click',QLSV);
}
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
  </div>`;

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
          <div >
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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>`;

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
const loading_gif = `<img style="display: block;margin-left: auto;margin-right: auto;width:10%" src="../static/images/ajax-loader.gif" alt="">`;

// _____________________________________________________

const getDataSV = async ()=>{
    const _data = await $.ajax({
        type: 'GET',
        url: 'api/login',
    });
    return _data;
}

const getDataKL = async () =>{
    const _data = await $.ajax({
        type: 'GET',
        url: 'api/disser',
    });
    return _data;
    
}
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
            <td><a href="api/editkl/${el.id_disser}">Sửa</a> / <a href="api/deletekl/${el.id_disser}">Xóa</a> </td>
            </tr>`)
        });
    });
}

const QLSV = async (event) =>{
    event.preventDefault();
    $("#div_left").empty();
    data = getDataSV();
    $("#div_left").html(loading_gif)
    data.then((result)=>{
        $("#div_left").html(html_QLSV);
        document.querySelector('#table_SV').insertAdjacentHTML('beforebegin',modal_html_SV)
        let stt = 0;
        result.forEach((el,index) =>{
            if (el.role > 0){
                let arr_kl;
                stt = stt + 1;
                if (el.disser.length === 0){
                    arr_kl = 'Không có';
                }
                else{
                    arr_kl = el.disser;
                }
                $("#tbody_data").append(`
                <tr>
                <td>${stt}</td>
                <td>${el.name}</td>
                <td>${el.username}</td>
                <td>${el.age}</td>
                <td>${arr_kl}</td>
                <td><a href="api/editsv/${el.id}">Sửa</a> / <a href="api/deletesv/${el.id}">Xóa</a> </td>
                </tr>`);
            };
        });
    });
}

    
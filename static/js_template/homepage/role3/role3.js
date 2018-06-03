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
            <form id="add_KL" class=" d-flex flex-column" action="">
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

const html_QLKL = `
<table id="table_KL" class="table table-hover">
<thead>
    <th>STT</th>
    <th>Tên Khóa Luận</th>
    <th>Ngày Gửi</th>
    <th>Khoa</th>
    <th>Chức năng</th>
</thead>
<tbody id="tbody_data">
</tbody>
</table>`;
const loading_gif = `<img style="display: block;margin-left: auto;margin-right: auto;width:5%" class="mt-2" src="../static/images/ajax-loader.gif" alt="">`;
const loading_gif2 = `<img style="display: block;margin-left: auto;margin-right: auto;" src="../static/images/ajax-loader2.gif" alt="">`;


$(document).ready(()=>{
    run();
})

const run = ()=>{
    try {
        document.querySelector("#tag2").addEventListener('click',QLKL);
    } catch (error) {
        console.log(error);
    }
}
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

const QLKL = async (event) =>{
    event.preventDefault();
    $("#div_left").empty();
    $("#div_left").html(loading_gif2)
    let cur_course = await getCurCourse();
    let id = await getCurID();
    let data_KL = await getDataKL();
    console.log(id);
    data = getDataSV();
    data.then((result)=>{
        let stt = 0;
        $("#div_left").html(html_QLKL);
        document.querySelector('#table_KL').insertAdjacentHTML('beforebegin',modal_html_KL)
        result.forEach((el)=>{
            if (el.id === id.cur_id){
                el.disser.forEach((element)=>{
                    data_KL.forEach((e)=>{
                        if (element === e.id_disser){
                            stt = stt + 1;
                            $("#tbody_data").append(`
                            <tr>
                            <td>${stt}</td>
                            <td>${e.disser_name}</td>
                            <td>${e.post_day}</td>
                            <td>${cur_course.cur_course}</td>
                            <td><a href="#">Sửa</a> / <a href="#" onclick="Delete_Disser('${e.id_disser}')">Xóa</a> </td>
                            </tr>`);
                        }
                    })   
                })
            }
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
        "status" : true
    }
    document.getElementById("add_KL").insertAdjacentHTML('afterbegin',loading_gif2);
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

//Delete Disser Function
const Delete_Disser = (par_id)=>{
    $("#div_left").html(loading_gif2)
    data_push = {"id": par_id}
    $.ajax({
        type:"POST",
        contentType:"application/json",
        dataType: "json",
        url: "/api/dissertation/delete/",
        data: JSON.stringify(data_push),
        success: ()=>{
            $('#tag2').click();
        }
    });
    $('#tag2').click();
}



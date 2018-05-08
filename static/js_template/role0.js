$(document).ready(()=>{
    run();
});

const run = ()=>{
    document.querySelector("#tag2").addEventListener('click',QLKL);
    document.querySelector("#tag3").addEventListener('click',QLSV);
}
// HTML_______________________________________________
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
<table id="table_KL" class="table">
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

    
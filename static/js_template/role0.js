$(document).ready(()=>{
    document.querySelector("#tag2").addEventListener('click',QLKL);
});
const getDataKL = async () =>{
    let data_return;
    const _data = await $.ajax({
        type: 'GET',
        url: 'api/disser',
    });
    return _data;
    
}
const QLKL = async (event) =>{
    event.preventDefault();
    data = getDataKL();
    console.log(data[[PromiseValue]]);
    console.log("Wrong");
}

    
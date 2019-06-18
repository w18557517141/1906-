var obtn = document.querySelector('.body .body-list .btn')
var uname = document.querySelector('.body .body-list .form-group input')
var upwd = document.querySelector('.body .body-list .form-group1 input')
var uform = document.querySelector('form')
uform.onsubmit = function(){
    return false;
}
obtn.onclick = function(){
    axios({
        method : 'get',
        url:'http://10.9.46.236/item/php/denglu.php',
        data:{
            uname :uname.value,
            upwd : upwd.value
        }
    }).then(function(data){
        if(data.state == '1'){
            alert(data.info)
            location.href = "http://10.9.46.236/item/html/index.html"
        }else{
            alert(data.info)
        }
    }).catch(function(info){
        console.log(info)
    })
}
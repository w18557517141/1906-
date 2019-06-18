var ofooter = document.querySelector('.footer1')
var zhuce1form =`
    <p class="uname">设置会员名</p>
    <p class="uname1">登录名<input type="text" placeholder="会员名一旦设置成功,无法修改" class="aname"></p>
    <p class="uname">请设置登录密码</p>
    <p class="uname1">登录密码<input type="password" placeholder="设置你的登录密码" class="apwd"></p>
    <p class="uname1">密码确认<input type="password" placeholder="请再次输入你的登录密码" class="bpwd"></p>
    <button>提交</button>
`
ofooter.innerHTML = ''
ofooter.innerHTML = zhuce1form;
var oname = document.querySelector('.aname')
var opwd = document.querySelector('.apwd')
var bpwd = document.querySelector('.bpwd')
var obtn  = document.querySelector('button')
obtn.onclick = function(){
    if(opwd.value != bpwd.value){
        alert('两次密码不一致，请重新输入')
    }else{
        axios({
            method : 'get',
            url : 'http://10.9.46.236/item/php/zhuce.php',
            data : {
                uname : oname.value,
                upwd : opwd.value
            }
        }).then(function(data){
            if(data.state == '1'){
                alert(data.info);
                location.href ='http://10.9.46.236/item/html/denglu.html'
            }else{
                alert(data.info)
            }
        }).catch(function(info){
            console.log(info)
        })
    }
}
$('.header-body li .color1').css('borderBottom','2px solid red')
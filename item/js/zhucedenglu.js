$('.model .modelbody .btn').on('mouseover', function () {
    $(this).css('background', 'rgba(255,0,54,.8)')
})
$('.model .modelbody .btn').on('mouseout', function () {
    $(this).css('background', '#ff0036')
})
$('.model .modelbody .btn').on('click', function () {
    $('.model').css('display', 'none')
})
var ofooter = document.querySelector('.footer')
var zhuceform = `
    <h1>手机号</h1>
    <select>
        <option value="">中国大陆&nbsp;&nbsp;&nbsp;&nbsp;+86</option>
        <option value="">中国台湾&nbsp;&nbsp;&nbsp;&nbsp;+886</option>
    </select>
    <input type="text" placeholder="请输入你的手机号">
    <h2>验证</h2>
    <div class="kuang">请按住滑块,拖动到最右边
        <div class="kuang1">&gt;&gt;</div>
        <i></i>
    </div>
    <button class="btn1">下一步</button>
`
ofooter.innerHTML = ''
ofooter.innerHTML = zhuceform;
var odiv = document.querySelector('.footer .kuang')
var adiv = document.querySelector('.footer .kuang .kuang1')
var oi = document.querySelector(".footer .kuang i")
var obtn = document.querySelector('.footer .btn1')
var oinput = document.querySelector('.box .footer input')
adiv.onmousedown = function (e) {
    e = e || window.event;
    preventDefault(e)
    var x = e.offsetX + 270;
    document.onmousemove = function (e) {
        preventDefault(e)
        e = e || window.event;
        var l = e.clientX - x - odiv.offsetLeft - 80
        l = l < 0 ? 0 : (l > 260 ? 260 : l);
        adiv.style.left = l + "px"
        oi.style.width = l + "px"
        if (l >= 260) {
            oi.style.background = "rgb(5, 243, 17)"
            oi.innerHTML = "验证通过";
            adiv.onmousedown = null;

        }
        if (l >= 260 && oinput.value != "") {
            obtn.style.background = 'red'
        }
        obtn.onclick = function () {
            if (obtn.style.background = 'red') {
                location.href = "http://10.9.46.236/item/html/zhuce1.html"
            }
            else {
                alert('请完成验证或者输入手机号')
            }
        }
    }

    document.onmouseup = function () {
        if (oi.offsetWidth < 260) {
            oi.style.width = "0"
            adiv.style.left = "0"
        }
        document.onmousemove = null;
    }
}
function preventDefault(e) {
    return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}


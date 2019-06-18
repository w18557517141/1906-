axios({
    method: 'get',
    url: 'http://10.9.46.236/item/php/shop.php',
    data: {}
}).then(function (data) {
    var obody = document.querySelector('.bodyquan')
    var dizhi = location.href;
    var arr = dizhi.split('?');
    var oarr = arr[1].split('=')
    var id = oarr[1]
    var str = ""
    for (var i = 0; i < data.length; i++) {
        var index = i
        if (id == index) {
            str = `
             <div class="grassbody">
                <div class="bigimg">
                    <img src="${data[i].img1}" alt="">
                    <div class="xbigimg">
                        <img src="${data[i].img1}" alt="">
                    </div>
                    <div class="hide"></div>
                </div>
                <div class="smimg">
                    <ul>
                        <li class="changecolor"><img src="${data[i].img1}" alt=""></li>
                        <li><img src="${data[i].img2}" alt=""></li>
                        <li><img src="${data[i].img3}" alt=""></li>
                        <li><img src="${data[i].img4}" alt=""></li>
                        <li><img src="${data[i].img5}" alt=""></li>
                    </ul>
                </div>
            </div>
            <div class="listbody" data-id = '${index}'>
                <h1>${data[i].h1}</h1>
                <h2>${data[i].h2}</h2>
                <b>
                    <span>价格</span>
                    <em>${data[i].em}</em>
                </b>
                <i>颜色分类</i>
                <ul>
                    <li class="change"><img src="${data[i].img6}" alt=""></li>
                    <li><img src="${data[i].img7}" alt=""></li>
                    <li><img src="${data[i].img8}" alt=""></li>
                    <li><img src="${data[i].img9}" alt=""></li>
                    <li><img src="${data[i].img10}" alt=""></li>
                </ul>
                <p>数量</p>
                <button class="jian">-</button>
                <input type="text" value="0">
                <button class="jia">+</button><br>
                <a href = "http://10.9.46.236/item/html/shopcar.html"><button class="tijiao">加入购物车</button>
            </div>
            `
            obody.innerHTML = str;
        }
    }
   
   



            // 购物车
    var obody = document.querySelector('.bodyquan')
    obody.addEventListener('click',function(e){
        var e = e || event;
        var target = e.target || e.srcElement;
        var id1 = target.parentNode.getAttribute('data-id')
        if(target.tagName == 'BUTTON' && target.className == 'jia'){
            if(!localStorage.getItem('data1')){
                localStorage.setItem('data1',JSON.stringify([{id:id1,num:1}]));
            }else{
                var obj = JSON.parse(localStorage.getItem('data1'))
                var stop = true;
                for (var i = 0;i<obj.length;i++){
                    if(obj[i].id == id){
                        stop = false;
                        obj[i].num++;
                        localStorage.setItem('data1',JSON.stringify(obj));
                        break;
                    }
                }
                if(stop){
                    obj.push({id:id1,num:1});
                    localStorage.setItem('data1',JSON.stringify(obj))
                }
            }
        }
    })




    // 放大镜
    function changeimg() {
        this.obimg = document.querySelector('.bigimg img')
        this.osimg = document.querySelectorAll('.smimg li')
        this.oxbig = document.querySelector('.xbigimg')
        this.oxbigimg = document.querySelector('.xbigimg img')
        this.obig = document.querySelector('.bigimg')
        this.ohide = document.querySelector('.hide')
        this.ossimg = document.querySelectorAll('.listbody li')
        this.init()
    }
    changeimg.prototype = {
        init: function () {
            this.bindevent()
        },
        changesrc: function (smsrc) {
            this.obimg.src = smsrc;
            this.oxbigimg.src = smsrc;
            this.ossimg.src = smsrc
        },
        bigglass: function (e, left, top) {
            e = e || window.event;
            var l = e.pageX - left - this.ohide.offsetWidth - this.ohide.offsetWidth /4;
            var t = e.pageY - top - this.ohide.offsetHeight - this.ohide.offsetHeight/2
            l = l < 0 ? 0 : (l > 220 ? 220 : l)
            t = t < 0 ? 0 : (t > 220 ? 220 : t)
            this.ohide.style.left = l + 'px'
            this.ohide.style.top = t + 'px'
            this.bigimgmove(l, t)
        },
        bigimgmove: function (l, t) {
            this.oxbigimg.style.left = -l * 1.8 + 'px';
            this.oxbigimg.style.top = -t * 1.8 + 'px';
        },
        show: function () {
            this.ohide.style.display = 'block'
            this.oxbig.style.display = 'block'
        },
        hide: function () {
            this.ohide.style.display = 'none'
            this.oxbig.style.display = 'none'
        },
        bindevent: function () {
            var _this = this
            for (var i = 0, k = this.osimg.length; i < k; i++) {
                var _this = this
                this.osimg[i].onmouseover = function () {
                    _this.changesrc(this.firstElementChild.src)
                }
            }
            for (var z = 0, x = this.ossimg.length; z < x; z++) {
                var _this = this
                this.ossimg[z].onclick = function () {
                    _this.changesrc(this.firstElementChild.src)
                }
            }
            this.obig.onmouseover = function () {
                _this.show();
            }
            this.obig.onmouseout = function () {
                _this.hide();
            }
            this.obig.onmousemove = function (e) {
                _this.bigglass(e, this.offsetLeft, this.offsetTop);
            }
        },
    }
    new changeimg()
    $('.grassbody .smimg li').on('mouseover', function () {
        $(this).addClass('changecolor').siblings().removeClass('changecolor')
    })
    $('.bodyquan .listbody li').on('mouseover', function () {
        $(this).addClass('change').siblings().removeClass('change')
    })


    var jian = document.querySelector('.listbody .jian');
    var jia = document.querySelector('.listbody .jia');
    var number = document.querySelector('.listbody input')
    jia.onclick = function () {
        number.value++;
    }
    jian.onclick = function () {
        if (number.value == 0) {
            number.value = 0
        } else {
            number.value--
        }
    }
}).catch(function (info) {
    console.log(info)
})




